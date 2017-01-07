import React, { Component } from 'react';
import store from '../../store';
import FeatureItemEditable from '../../components/FeatureItemEditable';
import { connect } from 'react-redux';
import editFeature from '../../actions/Features/edit';

class EditFeature extends Component {
	getFeature() {
		return this.props.features.find(f => f.id === Number(this.props.id));
	}
	render() {
		return (
			<FeatureItemEditable {...this.getFeature()} onSave={this.props.onSave} />
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
		onSave: item => dispatch(editFeature(item))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditFeature);
