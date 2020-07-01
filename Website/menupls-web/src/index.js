import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Terms from './components/Terms';
import Policy from './components/Policy';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/policy" component={Policy} />
      <Route path="/terms" component={Terms} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
