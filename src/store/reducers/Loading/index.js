const reducer = (state = false, action) => {
	switch (action.type) {
		case 'GET_ALL_FEATURES_REQUEST':
		case 'GET_FEATURE_REQUEST':
			return true;
		case 'RESET_FEATURES':
		case 'GET_ALL_FEATURES_FAILED':
		case 'RESET_FEATGET_FEATURE_FAILED':
			return false;
		default:
			return state;
	}
}

export default reducer;
