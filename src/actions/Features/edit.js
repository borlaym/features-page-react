import FeaturesAPI from '../../api/Features';

export default item => {
	return (dispatch, getState) => {
		dispatch({
			type: 'EDIT_FEATURE',
			payload: item
		});
		dispatch({ type: 'EDITING_REQUEST' });
		FeaturesAPI.edit(item).then(response => {
			dispatch({ type: 'EDITING_FINISHED' });
		}).catch(response => {
			dispatch({
				type: 'EDITING_FAILED',
				payload: {
					...response,
					originalValue: item
				}
			});
		});
	}
};
