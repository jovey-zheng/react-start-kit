import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import * as reducers from '../reducers';

let middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger');
  middlewares = [...middlewares, logger];
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares)
)(createStore);

export default function configureStore(initialState) {
  const reducer = combineReducers({...reducers, routing: routerReducer});
  const store = finalCreateStore(reducer, initialState);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers');
      const nextReducer = combineReducers({...nextReducers, routing: routerReducer});
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
