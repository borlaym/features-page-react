import React, { Component } from 'react';
import './Home.css';
import FeatureList from '../../containers/FeatureList';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <FeatureList />
      </div>
    );
  }
}

export default Home;
