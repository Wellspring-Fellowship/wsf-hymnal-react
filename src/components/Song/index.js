import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SongPage extends React.Component {
  debugger;
  render() {
    return (
      <div>
        <h3>{this.props.song.title}</h3>
        <p>Song: {this.props.song.content}</p>
      </div>
    );
  }
};

SongPage.propTypes = {
  song: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  let song = {song: '', title: '', content: ''};
  const songNumber = ownProps.params.song;
  if (state.songs.length > 0) {
    song = Object.assign({}, state.songs.find(song => song.song == songNumber))
  }
  return {song: song};
};

export default connect(mapStateToProps)(SongPage);
