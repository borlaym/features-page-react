import React, { Component } from 'react';
import store from '../../store';
import FeatureItem from '../../components/FeatureItem';
import { connect } from 'react-redux';
import deleteFeature from '../../actions/Features/delete';

class FeatureList extends Component {
	getItems() {
		return this.props.features.map(item => (
			<FeatureItem
				{...item}
				onDelete={this.props.onDelete.bind(this, item)}
				key={item.name}
			/>
		));
	}
	render() {
		return (
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td>Description</td>
						<td>Type</td>
						<td>Enabled</td>
						<td>Actions</td>
					</tr>
					{this.getItems()}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = state => {
	return {
		features: state
	}
};
const mapDispatchToProps = dispatch => {
	return {
		onDelete: item => dispatch(deleteFeature(item))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FeatureList);
