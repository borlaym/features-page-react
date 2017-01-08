import React, { Component } from 'react';
import store from '../../store';
import FeatureItemEditable from '../../components/FeatureItemEditable';
import { connect } from 'react-redux';
import addFeature from '../../actions/Features/add';

class AddFeature extends Component {
	render() {
		return (
			<FeatureItemEditable onSave={this.props.onSave} />
		);
	}
}

const mapStateToProps = state => {
	return {}
};
const mapDispatchToProps = dispatch => {
	return {
		onSave: item => dispatch(addFeature(item))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddFeature);
