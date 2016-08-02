import React, { Component } from 'react';

export default class RouterPage extends Component {

  render() {
    const code = `
  import React from 'react';
  import {Route} from 'react-router';
  import Base from 'components/base/Base';
  import Home from 'components/home/Home';

  import WebpackPage from 'components/content/WebpackPage';
  import ComponentPage from 'components/content/ComponentPage';
  import RouterPage from 'components/content/RouterPage';
  import AntdPage from 'components/content/AntdPage';

  export default (
    <Route component={Base}>
      <Route path="/" component={Home} />
      <Route path="/webpack" component={WebpackPage} />
      <Route path="/component" component={ComponentPage} />
      <Route path="/router" component={RouterPage} />
      <Route path="/antd" component={AntdPage} />
    </Route>
  );
    `;

    return (
      <div>
        <div className="margin-bottom-md">React Router 是完整的 React 路由解决方案</div>
        <div className="margin-bottom-md">React Router 保持 UI 与 URL 同步。它拥有简单的 API 与强大的功能例如代码缓冲加载、动态路由匹配、以及建立正确的位置过渡处理。你第一个念头想到的应该是 URL，而不是事后再想起。</div>

        <pre>{code}</pre>
      </div>
    )
  }
}
