import React from 'react';
import ReactDOM from 'react-dom';

import {
  AdminRestaurantForm,
  Login,
  LandingPage,
  Policy,
  Terms,
} from './components/pages';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const routing = (
  <Router>
    <div className="mp-container">
      <div className="mp-content">
        <Route exact path="/" component={LandingPage} />
        <Route path="/policy" component={Policy} />
        <Route path="/terms" component={Terms} />
        <Route path="/admin" component={AdminRestaurantForm} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
