import React, { Component } from 'react';
import store from '../../store';
import FeatureItem from '../../components/FeatureItem';

class FeatureList extends Component {
	componentDidMount() {
		store.subscribe(this.forceUpdate.bind(this));
	}
	onDelete(item) {
		store.dispatch({
			type: 'DELETE_FEATURE',
			payload: item
		});
	}
	getItems() {
		return store.getState().map(item => (
			<FeatureItem
				{...item}
				onDelete={this.onDelete.bind(this, item)}
				key={item.name}
			/>
		));
	}
	render() {
		return (
			<table>
				<tbody>
					{this.getItems()}
				</tbody>
			</table>
		);
	}
}

export default FeatureList;
