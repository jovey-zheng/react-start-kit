import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Icon,
  Badge,
  Tooltip
} from 'antd';

import './header.css';

export default class Header extends Component {

  handleSearch(e) {
    if (e.which === 13) {
      alert('搜索功能尚未添加...')
    }
  }

  render() {
    return (
      <Row type="flex" align="middle" className="container padding-lr-lg">
        <Col span={2}>
          <input
            type="text"
            placeholder="搜索..."
            className="header-search"
            onKeyDown={(e) => this.handleSearch(e)}
          />
        </Col>

        <Col span={8} offset={14} className="pull-right">
          <Tooltip placement="bottom" title="日历">
            <Icon type="calendar" className="padding-lr-md font-md pointer-hover" />
          </Tooltip>

          <Tooltip placement="bottom" title="通知">
            <Badge dot className="padding-lr-md">
              <Icon type="notification" className="font-md pointer-hover" />
            </Badge>
          </Tooltip>

          <Tooltip placement="bottom" title="设置">
            <Icon type="setting" className="padding-lr-md font-md pointer-hover" />
          </Tooltip>
        </Col>

      </Row>
    );
  }
}
