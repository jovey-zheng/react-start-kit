import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';

import StartPage from 'components/content/StartPage';
import WebpackPage from 'components/content/WebpackPage';
import ComponentPage from 'components/content/ComponentPage';
import RouterPage from 'components/content/RouterPage';
import AntdPage from 'components/content/AntdPage';
import './home.css';

@connect(
  state => ({
    router: state.router,
  })
)
export default class Home extends Component {

  render() {
    const {router} = this.props;
    let type, contentPage;
    switch (get(router, 'location.pathname')) {
      case '/':
        type = '开始';
        contentPage = <StartPage />;
        break;
      case '/webpack':
        type = '关于 Webpack';
        contentPage = <WebpackPage />;
        break;
      case '/component':
        type = '关于 Component';
        contentPage = <ComponentPage />;
        break;
      case '/router':
        type = '关于 Router';
        contentPage = <RouterPage />;
        break;
      case '/antd':
        type = '关于 Antd';
        contentPage = <AntdPage />;
        break;
    }

    return (
      <div className="padding-lg">
        <div className="margin-bottom-md">
          <h1>{type}</h1>
        </div>

        <div>
          {contentPage}
        </div>
      </div>
    );
  }
}
