import React, {PropTypes, Button} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class SongPage extends React.Component {

  render() {
    return (
      <Paper zDepth={2}>
      <Card>
        <CardTitle subtitle={this.props.song.song} title={this.props.song.title}></CardTitle>
        <CardText dangerouslySetInnerHTML={createMarkup(this.props.song.content)}/>
        <CardActions>
          <RaisedButton label="Go Back" primary={true} onClick={goBack} />
        </CardActions>
      </Card>
      </Paper>
    );
  }
};

SongPage.propTypes = {
  song: PropTypes.object.isRequired,
};

// go back to previous page.
function goBack(e)
{
  e.preventDefault();
  browserHistory.goBack();
}

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
