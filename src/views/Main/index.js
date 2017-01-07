import React, { Component } from 'react';
import NavBar from '../../components/NavBar';

class Main extends Component {
  render() {
    return (
      <div className="Main">
				<NavBar />
				{this.props.children}
      </div>
    );
  }
}

export default Main;
