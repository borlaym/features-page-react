const reducer = (state = {
	data: false,
	editing: false,
	deleting: false,
	adding: false
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


		case 'ADD_REQUEST':
			return {
				...state,
				adding: true
			};
		case 'ADD_FINISHED':
		case 'ADD_FAILED':
			return {
				...state,
				adding: false
			};


		case 'DELETING_REQUEST':
			return {
				...state,
				deleting: true
			};
		case 'DELETING_FINISHED':
		case 'DELETING_FAILED':
			return {
				...state,
				deleting: false
			};


		default:
			return state;
	}
}

export default reducer;
