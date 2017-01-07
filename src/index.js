import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/Main/Main';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';


ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}/>
		</Router>
	</Provider>
), document.getElementById('root'))
