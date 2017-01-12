import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
//import Fetch from 'react-fetch'

import {connect} from 'react-redux';
import * as songActions from '../../actions/songActions';
import SongList from './SongList';
import {Card, Container, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.css';

const style = {
  marginLeft: 20,
};

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
      <Paper zDepth={2}>
      <div>
        <h1>Songs</h1>
        <div>
          <SearchBar queryHandler={this.queryHandler} />
          <Divider />
          <SongList songs={this.props.songs.filter(song => song.title.toLowerCase().indexOf(this.state.query) >= 0)} />
        </div>
      </div>
    </Paper>
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
        <TextField hintText="Search....." style={style} underlineShow={false} onChange={this.handleChange} />
      </form>
    );
  }
}

export default connect(mapStateToProps)(SongsPage);
