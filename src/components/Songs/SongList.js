import React, {PropTypes} from 'react';

const SongList = ({songs}) => {

  return (
      <ul className="list-group">
        {songs.map(song =>
          <li className="list-group-item" key={song.title}>
            {song.title}
          </li>
        )}
      </ul>
  );
};

SongList.propTypes = {
  songs: PropTypes.array.isRequired
};

export default SongList;
