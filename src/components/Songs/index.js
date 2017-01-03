import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
//import Fetch from 'react-fetch'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  state = {
    data: []
  };

  // loadData() {
  //     fetch(API)
  //       .then(response => response.json())
  //       .then(json => {
  //         const songs = json.songs;
  //         for (var i = 0; i < songs.length; i++) {
  //           console.log(songs[i].title);
  //         }
  //       });
  //   }

  componentDidMount() {
    console.log("songs did load");
    }


  render() {
    return (
      <div>
        <h1>Songs</h1>
      </div>
    );
  }
}


class Song extends React.Component{
  render(){
    console.log(this.props.length);
    var i;
    for(i = 0; i < this.props.length; i++) {

    }
    return <div/>
  }
}
