import React, { Component } from 'react';
import store from '../../store';
import FeatureItemEditable from '../../components/FeatureItemEditable';
import { connect } from 'react-redux';
import addFeature from '../../actions/Features/add';
import { browserHistory } from 'react-router';

class AddFeature extends Component {
	render() {
		return (
			<FeatureItemEditable onSave={this.props.onSave} disabled={this.props.loading} />
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading.adding
	}
};
const mapDispatchToProps = dispatch => {
	return {
		onSave: item => {
			dispatch(addFeature(item));
			browserHistory.push('/');
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddFeature);
