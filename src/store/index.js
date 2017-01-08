import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import features from './reducers/Features';
import loading from './reducers/Loading';
import cached from './reducers/Caching';

const reducer = combineReducers({
	features,
	loading,
	cached
});

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

export default store;
