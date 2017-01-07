import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/Main/Main';
import Edit from './views/Edit';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';


ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}/>
			<Route path="/edit/:id" component={Edit}/>
		</Router>
	</Provider>
), document.getElementById('root'))
