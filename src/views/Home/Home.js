import React, { Component } from 'react';
import './Home.css';
import FeatureList from '../../containers/FeatureList';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <FeatureList />
				<Link to='/add'>Add feature</Link>
      </div>
    );
  }
}

export default Home;
