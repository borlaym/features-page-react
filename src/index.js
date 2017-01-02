import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/Main/Main';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
  </Router>
), document.getElementById('root'))
