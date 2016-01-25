import React, {Component, PropTypes} from 'react';

import Header from 'components/header/Header';
import Sidebar from 'components/sidebar/Sidebar';

import {Row, Col} from 'antd';
import './base.css';

export default class Base extends Component {

  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    const {children} = this.props;
    return (
      <div>
        <Row>
          <Col span="4">
            <Sidebar />
          </Col>
          <Col span="20">
            <Header />
            {children}
          </Col>
        </Row>
      </div>
    );
  }
}
