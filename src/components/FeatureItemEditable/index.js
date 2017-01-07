import React, { Component } from 'react';

class FeatureItemEditable extends Component {
	getHeader() {
		if (this.props.name && this.props.name !== '') {
			return (<h1>Editing feature {this.props.name}</h1>);
		} else {
			return (<h1>Add feature</h1>);
		}
	}
	render() {
		return (
			<div>
				{this.getHeader()}
				<p>Name</p>
				<p><input readOnly type='text' value={this.props.name} /></p>
				<p>Description</p>
				<p><input readOnly type='text' value={this.props.description} /></p>
				<p>Type</p>
				<p><input readOnly type='text' value={this.props.type} /></p>
				<p>Enabled</p>
				<p><input readOnly type='checkbox' checked={this.props.enabled} /></p>
				<button onClick={this.props.onSave}>Save</button>
			</div>
		);
	}
}

export default FeatureItemEditable;
