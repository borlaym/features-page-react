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
	getById: id => new Promise(resolve => {
		const item = features.find(f => f.id === Number(id));
		setTimeout(resolve.bind(null, item), 500)
	}),
	edit: item => new Promise(resolve => {
		const inDB = features.find(f => f.id === item.id);
		const index = features.indexOf(inDB);
		features[index] = item;
		setTimeout(resolve, 500)
	}),
	add: item => new Promise(resolve => {
		item.id = Math.floor(Math.random() * 10000000);
		features.push(item);
		setTimeout(resolve, 500);
	}),
	delete: item => new Promise(resolve => {
		const inDB = features.find(f => f.id === item.id);
		const index = features.indexOf(inDB);
		features.splice(index, 0);
		setTimeout(resolve, 500);
	})
};

export default API;
