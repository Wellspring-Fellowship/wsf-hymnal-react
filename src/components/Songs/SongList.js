import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Card, Container, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import './style.css';

class SongList extends Component {
  render() {
  return (
    <div>
      <list>
        {this.props.songs.map(song =>
          <Link to={'/songs/' + song.song}>
            <ListItem primaryText={song.title} secondaryText={song.song}></ListItem>
          </Link>
        )}
      </list>
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
