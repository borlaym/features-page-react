import React, { Component } from 'react';
import FeatureItemEditable from '../../components/FeatureItemEditable';
import { connect } from 'react-redux';
import editFeature from '../../actions/Features/edit';
import actions from '../../actions/Features/get';

class EditFeature extends Component {
	getFeature() {
		return this.props.features.find(f => f.id === Number(this.props.id));
	}
	render() {
		return (
			<FeatureItemEditable {...this.getFeature()} onSave={this.props.onSave} />
		);
	}
	componentDidMount() {
		this.props.dispatch(actions.getFeature(this.props.id));
	}
}

const mapStateToProps = state => {
	return {
		features: state
	}
};
const mapDispatchToProps = dispatch => {
	return {
		onSave: item => dispatch(editFeature(item)),
		dispatch
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditFeature);
