import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import {
  Row,
  Col
} from 'antd';

import Header from 'components/header/Header';
import Sidebar from 'components/sidebar/Sidebar';
import './base.css';

@connect(
  state => ({
    router: get(state, 'routing.locationBeforeTransitions'),
  })
)
export default class Base extends Component {

  render() {
    const {
      children,
      router
    } = this.props;
    let type;
    switch (get(router, 'pathname')) {
      case '/':
        type = '开始';
        break;
      case '/webpack':
        type = '关于 Webpack';
        break;
      case '/component':
        type = '关于 Component';
        break;
      case '/router':
        type = '关于 Router';
        break;
      case '/antd':
        type = '关于 Antd';
        break;
    }

    return (
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20} style={{marginLeft: 237}}>
          <Header />
          <div className="padding-lg content-container">
            <div className="margin-bottom-md">
              <h1>{type}</h1>
            </div>
            {children}
          </div>
        </Col>
      </Row>
    );
  }
}
