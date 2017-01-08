const reducer = (state = {
	data: false,
	editing: false,
	deleting: false
}, action) => {
	switch (action.type) {
		case 'GET_ALL_FEATURES_REQUEST':
		case 'GET_FEATURE_REQUEST':
			return {
				...state,
				data: true
			};
		case 'RESET_FEATURES':
		case 'GET_ALL_FEATURES_FAILED':
		case 'RESET_FEATGET_FEATURE_FAILED':
			return {
				...state,
				data: false
			};
		case 'EDITING_REQUEST':
			return {
				...state,
				editing: true
			};
		case 'EDITING_FINISHED':
		case 'EDITING_FAILED':
			return {
				...state,
				editing: false
			};
		default:
			return state;
	}
}

export default reducer;
