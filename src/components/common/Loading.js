import React, { Component } from 'react';
import {
  Icon
} from 'antd';

const main = {
  textAlign: 'center',
  fontSize: '16px',
  padding: '10px',
  width: '200px',
}
const loader = {
  paddingLeft: '10px',
}

export default class Loading extends Component {

  render() {
    return (
      <div style={main}>
        <Icon type="loading" />
        <span style={loader}>努力加载中 ...</span>
      </div>
    )
  }
}
