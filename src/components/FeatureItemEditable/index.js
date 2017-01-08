import React, { Component } from 'react';

class FeatureItemEditable extends Component {
	getHeader() {
		if (this.props.name && this.props.name !== '') {
			return (<h1>Editing feature {this.props.name}</h1>);
		} else {
			return (<h1>Add feature</h1>);
		}
	}
	onSave() {
		this.props.onSave({
			id: this.props.id,
			name: this.refs.name.value,
			description: this.refs.description.value,
			type: this.refs.type.value,
			enabled: this.refs.enabled.checked
		});
	}
	componentWillReceiveProps(nextProps) {
		this.refs.name.value = nextProps.name;
		this.refs.description.value = nextProps.description;
		this.refs.type.value = nextProps.type;
		this.refs.enabled.value = nextProps.enabled;
	}
	render() {
		return (
			<div>
				{this.getHeader()}
				<p>Name</p>
				<p><input type='text' defaultValue={this.props.name} ref='name'/></p>
				<p>Description</p>
				<p><input type='text' defaultValue={this.props.description} ref='description'/></p>
				<p>Type</p>
				<p><input type='text' defaultValue={this.props.type} ref='type'/></p>
				<p>Enabled</p>
				<p><input type='checkbox' defaultChecked={this.props.enabled} ref='enabled'/></p>
				<button onClick={this.onSave.bind(this)}>Save</button>
			</div>
		);
	}
}

export default FeatureItemEditable;
