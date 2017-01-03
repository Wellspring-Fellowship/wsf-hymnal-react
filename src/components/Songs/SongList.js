import React, {PropTypes} from 'react';
import {Link} from 'react-router';
const SongList = ({songs}) => {
  return (
      <ul className="list-group">
        {songs.map(song =>
          <li className="list-group-item" key={song.title}>
            <Link to={'/songs/' + song.song}>{song.song} - {song.title}</Link>
          </li>
        )}
      </ul>
  );
};

SongList.propTypes = {
  songs: PropTypes.array.isRequired
};

export default SongList;
