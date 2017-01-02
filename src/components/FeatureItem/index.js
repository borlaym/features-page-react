import React, { Component } from 'react';

class FeatureItem extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.description}</td>
				<td>{this.props.type}</td>
				<td>{this.props.enabled + ''}</td>
				<td onClick={this.props.onDelete}>DELETE</td>
			</tr>
		);
	}
}

export default FeatureItem;