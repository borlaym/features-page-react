import React, { Component } from 'react';
import { Link } from 'react-router';

class FeatureItem extends Component {
	render() {
		return (
			<tr>
				<td>
					<Link to={`/edit/${this.props.id}`}>{this.props.name}</Link>
				</td>
				<td>{this.props.description}</td>
				<td>{this.props.type}</td>
				<td>{this.props.enabled + ''}</td>
				<td onClick={this.props.onDelete}>DELETE</td>
			</tr>
		);
	}
}

export default FeatureItem;
