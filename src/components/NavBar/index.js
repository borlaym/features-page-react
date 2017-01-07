import React, { Component } from 'react';
import { Link } from 'react-router';
import './main.css';

class NavBar extends Component {
	render() {
		return (
			<nav><Link to='/'>Home</Link></nav>
		);
	}
}

export default NavBar;
