import React, { Component } from 'react';
import './Main.css';
import FeatureList from '../../containers/FeatureList';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <FeatureList />
      </div>
    );
  }
}

export default Main;
