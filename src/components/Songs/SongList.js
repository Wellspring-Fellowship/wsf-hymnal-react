import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class SongList extends Component {
  render() {
    //var songs = this.state.songs; //.filter((song) => song.title.startsWith('Wonderful'));
    //const songs = this.props.songs;
    //console.log("exampleState " + this.state.exampleState);
  return (
    <div>
    <ul className="list-group">
        {this.props.songs.map(song =>
          <li className="list-group-item" key={song.title}>
            <Link to={'/songs/' + song.song}>{song.song} - {song.title}</Link>
          </li>
        )}
      </ul>
      </div>
  );
}
};

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    exampleState: state.exampleState //.filter((song) => song.title.startsWith('Wonderful'))
  };
}

export default connect(mapStateToProps)(SongList);
