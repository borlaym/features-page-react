import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import features from './reducers/Features';
import loading from './reducers/Loading';
import cached from './reducers/Caching';

const reducer = combineReducers({
	features,
	loading,
	cached
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
