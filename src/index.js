require.ensure([], (require) => {
  const {render} = require('react-dom');
  const app = require('./app');

  render(app, document.getElementById('app'));
});
