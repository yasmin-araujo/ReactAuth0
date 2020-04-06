import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
