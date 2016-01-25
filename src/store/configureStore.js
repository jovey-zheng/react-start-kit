import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

import routes from '../routes';
import * as reducers from '../reducers';

let middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger');
  middlewares = [...middlewares, logger];
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  reduxReactRouter({routes, createHistory}),
)(createStore);

export default function configureStore(initialState) {
  const reducer = combineReducers(reducers);
  const store = finalCreateStore(reducer, initialState);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers');
      const nextReducer = combineReducers(nextReducers);
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

