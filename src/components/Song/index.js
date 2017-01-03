import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SongPage extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.song.song} : {this.props.song.title}</h3>
        <div dangerouslySetInnerHTML={createMarkup(this.props.song.content)}/>
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

// because the text we are getting from the JSON includes HTML tags
function createMarkup(props) {
  return {__html: props};
}

export default connect(mapStateToProps)(SongPage);
