const features = [
	{id: 0, name: 'superuser', description: 'Superuser switch', type: 'alpha', enabled: true},
	{id: 1, name: 'no3rdparty', description: 'Disable 3rd party code', type: 'beta', enabled: true},
	{id: 2, name: 'test1', description: 'test #1', type: 'beta', enabled: true},
	{id: 3, name: 'test2', description: 'test #2', type: 'alpha', enabled: true},
	{id: 4, name: 'test3', description: 'test #3', type: 'beta', enabled: false},
	{id: 5, name: 'test4', description: 'test #4', type: 'alpha', enabled: true},
	{id: 6, name: 'test5', description: 'test #5', type: 'alpha', enabled: false}
];

const API = {
	getAll: () => new Promise(resolve => {
		setTimeout(resolve.bind(null, features), 500)
	}),
	getById: id => Promise(resolve => {
		const item = features.find(f => f.id === id);
		setTimeout(resolve.bind(null, item), 500)
	}),
};

export default API;
