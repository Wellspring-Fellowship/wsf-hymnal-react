import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
//import Fetch from 'react-fetch'

import {connect} from 'react-redux';
import * as songActions from '../../actions/songActions';
import SongList from './SongList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.css';

class SongsPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        query: '',
      };
    }

  queryHandler = (query) => {
    this.setState({ query });
  }

  render() {
    return (
      <div>
        <h1>Songs</h1>
        <div>
          <SearchBar queryHandler={this.queryHandler} />
          <SongList songs={this.props.songs.filter(song => song.title.toLowerCase().indexOf(this.state.query) >= 0)} />
        </div>
      </div>
    );
  }
}

SongsPage.propTypes = {
  songs: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  console.log("mapStateToProps " + state);
  // state = {cats: [{id:1, name: "Maru"}, etc.]}
  if(state.songs.length > 0) {
    return {
      songs: state.songs //.filter((song) => song.title.startsWith('Wonderful'))
    };
  } else {
    return {
      songs: [{title: '', song: '', content: ''}]
    }
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.queryHandler(event.target.value.toLowerCase());
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}

export default connect(mapStateToProps)(SongsPage);
