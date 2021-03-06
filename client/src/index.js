import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './bootstrap.min.css';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import gamesReducer from './reducers/gamesReducer'
import usersReducer from './reducers/usersReducer';

const reducer = combineReducers({
  games: gamesReducer,
  user:usersReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

