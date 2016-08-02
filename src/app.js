import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.min.css';

import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

module.exports = (
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>
);
