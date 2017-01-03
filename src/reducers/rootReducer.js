import {combineReducers} from 'redux';
import songs from './songReducer';

const rootReducer = combineReducers({
  // short hand property names
  songs
})

export default rootReducer;
