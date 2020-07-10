import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Terms from './components/Terms';
import Policy from './components/Policy';
import Footer from './components/Footer';
import { AdminRestaurantForm } from './components/pages';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const routing = (
  <Router>
    <div className="mp-container">
      <div className="mp-content">
        <Route exact path="/" component={App} />
        <Route path="/policy" component={Policy} />
        <Route path="/terms" component={Terms} />
        <Route path="/admin" component={AdminRestaurantForm} />
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
