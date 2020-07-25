import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import { paths } from './constants';

import {
  AdminRestaurantForm,
  Login,
  LandingPage,
  Policy,
  Terms,
} from './components/pages';
import { SecuredRoute } from './components/common';

import './theme/global.scss';

const routing = (
  <Router>
    <div className="mp-container">
      <div className="mp-content">
        <Switch>
          <Route exact path={paths.BASE} component={LandingPage} />
          <Route exact path={paths.POLICY} component={Policy} />
          <Route exact path={paths.TERMS} component={Terms} />
          <Route exact path={paths.LOGIN} component={Login} />
          <SecuredRoute
            exact
            path={paths.ADMIN}
            component={AdminRestaurantForm}
          />
        </Switch>
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
