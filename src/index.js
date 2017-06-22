import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import App from './components/app';
import Timer from './components/timer';
import Countdown from './components/countdown';

// require('style!css!node_modules/foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../src/styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <Route path='timer' component={Timer} />
      <Route path='countdown' component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
