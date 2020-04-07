import React, { Component } from 'react';

class Home extends Component {
    render() {
        const { isAuthenticated, login } = this.props.auth;
		return (
			<div>
				<h1>Home</h1>
					<button onClick={login}>Log In</button>
			</div>
		);
	}
}

export default Home;