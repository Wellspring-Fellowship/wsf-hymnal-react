import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function catReducer(state = initialState.songs, action) {
  switch(action.type) {
    case types.LOAD_SONGS_SUCCESS:
      return action.songs
    default:
      return state;
  }
}
