import React, { Component } from 'react';
import EditFeature from '../../containers/EditFeature';

class Edit extends Component {
  render() {
    return (
      <div className="Edit">
				<EditFeature id={this.props.params.id} />
      </div>
    );
  }
}

export default Edit;
