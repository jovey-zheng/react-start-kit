import React from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';

import 'font-awesome/css/font-awesome.css';
import 'antd/lib/index.css';

import configureStore from './store/configureStore';

const store = configureStore();

module.exports = (
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
);
