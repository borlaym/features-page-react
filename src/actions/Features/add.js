import FeaturesAPI from '../../api/Features';

export default item => {
	return (dispatch, getState) => {
		dispatch({
			type: 'ADD_FEATURE',
			payload: item
		});
		dispatch({ type: 'ADD_REQUEST' });
		FeaturesAPI.add(item).then(response => {
			dispatch({ type: 'ADD_FINISHED' });
		}).catch(response => {
			dispatch({
				type: 'ADD_FAILED',
				payload: {
					...response,
					originalValue: item
				}
			});
		});
	}
};
