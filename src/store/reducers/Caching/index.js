const reducer = (state = false, action) => {
	switch (action.type) {
		case 'FEATURES_DOWNLOADED':
			return true;
		default:
			return state;
	}
}

export default reducer;
