import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import './index.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadSongs} from './actions/songActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();

store.dispatch(loadSongs());

ReactDOM.render(
  <MuiThemeProvider><Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
