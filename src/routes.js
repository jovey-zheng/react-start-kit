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
