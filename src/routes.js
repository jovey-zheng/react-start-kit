import React from 'react';
import Route from 'react-router/lib/Route';
import Base from 'components/base/Base';
import Home from 'components/home/Home';

export default (
  <Route component={Base}>
    <Route path="/" component={Home} />
    <Route path="/webpack" component={Home} />
    <Route path="/component" component={Home} />
    <Route path="/router" component={Home} />
    <Route path="/antd" component={Home} />
  </Route>
);
