import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home/Home';
import Main from './views/Main';
import Edit from './views/Edit';
import Add from './views/Add';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';


ReactDOM.render((
	<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={Home} />
					<Route path="/edit/:id" component={Edit} />
					<Route path="/add" component={Add} />
				</Route>
			</Router>
	</Provider>
), document.getElementById('root'))
