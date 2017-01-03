import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
//import Fetch from 'react-fetch'

import {connect} from 'react-redux';
import * as songActions from '../../actions/songActions';
import SongList from './SongList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.css';

class SongsPage extends Component {
  render() {

    const songs = this.props.songs.filter((song) => song.title.startsWith('Wonderful'));

    return (
      <div>
        <h1>Songs</h1>
        <div>
          <SearchBar />
          <SongList songs={songs} />
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
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
