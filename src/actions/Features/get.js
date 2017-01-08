import FeaturesAPI from '../../api/Features';

const actions = {
	getAllFeatures: () => {
		return dispatch => {
			dispatch({
				type: 'GET_ALL_FEATURES_REQUEST'
			});
			FeaturesAPI.getAll().then(response => {
				dispatch({
					type: 'RESET_FEATURES',
					payload: response
				});
			}).catch(response => {
				dispatch({
					type: 'GET_ALL_FEATURES_FAILED',
					payload: response
				});
			});
		}
	},
	getFeature: (id) => {
		return (dispatch, getState) => {
			dispatch({
				type: 'GET_FEATURE_REQUEST'
			});
			FeaturesAPI.getById(id).then(response => {
				dispatch({
					type: 'RESET_FEATURES',
					payload: [response]
				});
			}).catch(response => {
				dispatch({
					type: 'GET_FEATURE_FAILED',
					payload: response
				});
			});
		}
	}
};

export default actions;
