import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './Pages/app';
import Login from './Pages/login';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
  </Router>
);

export default router;