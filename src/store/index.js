import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'RESET_FEATURES':
			return [...action.payload];
		case 'DELETE_FEATURE':
			return [...state.filter(f => f !== action.payload)];
		case 'EDIT_FEATURE':
			const item = state.find(f => f.id === action.payload.id);
			const index = state.indexOf(item);
			return [
				...state.slice(0, index),
				{ ...action.payload },
				...state.slice(index + 1)
			]
		case 'ADD_FEATURE':
			return [
				...state,
				{
					...action.payload,
					id: Math.floor(Math.random() * 10000000)
				}
			]
		default:
			return state;
	}
}

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

export default store;
