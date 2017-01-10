import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './Pages/app';
import Place from './Pages/place';
import Login from './Pages/login';
import Signup from './Pages/register';
import MyPlaces from './Pages/myplaces';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/place/:id" component={Place}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/myplaces" component={MyPlaces}/>
  </Router>
);

export default router;