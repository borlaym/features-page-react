import React, { Component } from 'react';
import store from '../../store';
import FeatureItem from '../../components/FeatureItem';

class FeatureList extends Component {
	getItems() {
		return store.getState().map(item => (<FeatureItem {...item} />));
	}
	render() {
		return (
			<table>
				{this.getItems()}
			</table>
		);
	}
}

export default FeatureList;
