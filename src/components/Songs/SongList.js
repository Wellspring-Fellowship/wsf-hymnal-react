import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';


class SongList extends Component {
  // constructor(props) {
  //     super(props);
  //     // This binding is necessary to make `this` work in the callback
  //     this.state = {songs: this.props.songs};
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //
  // handleClick() {
  //   // this.setState(prevState => ({
  //   //   //isToggleOn: !prevState.isToggleOn
  //   // }));
  //   //this.props.songs.songs.filter((song) => song.title.startsWith('Wonderful'));
  //
  //   //this.setState({songs: this.state.songs[0]}); //filter((song) => song.title.startsWith('Wonderful')) });
  //
  //   // Correct
  //   this.setState((prevState, props) => ({
  //     songs: props.songs.filter((song) => song.title.startsWith('Wonderful'))
  //   }));
  // }

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
// SongList.propTypes = {
//   songs: PropTypes.array.isRequired
// };

//export default SongList;

export default connect(mapStateToProps)(SongList);
