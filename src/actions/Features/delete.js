import FeaturesAPI from '../../api/Features';

export default item => {
	return (dispatch, getState) => {
		dispatch({
			type: 'DELETE_FEATURE',
			payload: item
		});
		dispatch({ type: 'DELETING_REQUEST' });
		FeaturesAPI.delete(item).then(response => {
			dispatch({ type: 'DELETING_FINISHED' });
		}).catch(response => {
			dispatch({
				type: 'DELETING_FAILED',
				payload: {
					...response,
					originalValue: item
				}
			});
			dispatch({
				type: 'ADD_FEATURE',
				payload: item
			})
		});
	}
};
