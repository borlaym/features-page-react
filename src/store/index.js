import { createStore } from 'redux';
const features = [
	{name: 'superuser', description: 'Superuser switch', type: 'alpha', enabled: true},
	{name: 'no3rdparty', description: 'Disable 3rd party code', type: 'beta', enabled: true},
	{name: 'test1', description: 'test #1', type: 'beta', enabled: true},
	{name: 'test2', description: 'test #2', type: 'alpha', enabled: true},
	{name: 'test3', description: 'test #3', type: 'beta', enabled: false},
	{name: 'test4', description: 'test #4', type: 'alpha', enabled: true},
	{name: 'test5', description: 'test #5', type: 'alpha', enabled: false}
];

const reducer = (state = features, action) => {
	switch (action.type) {
		case 'DELETE_FEATURE':
			return [...state.filter(f => f !== action.payload)];
		default:
			return state;
	}
}

const store = createStore(reducer);

export default store;
