import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

require('style!css!node_modules/foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
require('style!css!sass!../src/styles/app.scss');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >

    </Route>
  </Router>,
  document.getElementById('root')
);
