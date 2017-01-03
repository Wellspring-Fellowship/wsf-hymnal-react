import * as types from './actionTypes';


export function loadSongsSuccess(songs) {
  return {type: 'LOAD_SONGS_SUCCESS', songs};
}

export function loadSongs() {
  return function(dispatch) {
    return getAllSongs().then(songs => {
      dispatch(loadSongsSuccess(songs.songs));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getAllSongs() {
  return fetch('http://wellspring-fellowship.github.io/site.json').then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
}
