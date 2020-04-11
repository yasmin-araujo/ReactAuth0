import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import Auth from './Auth/Auth';
import Callback from './Callback';
import Public from './Public';
import Private from './Private';
import Courses from './Courses';
import SecureRoute from './SecureRoute';

class App extends Component {
	constructor(props) {
		super(props);
		this.auth = new Auth(this.props.history);
	}
	render() {
		const { auth } = this.state;
		return (
			<>
				<Nav auth={auth} />
				<div className="body">
					<Route path="/" exact render={(props) => <Home auth={auth} {...props} />} />
					<Route path="/callback" render={(props) => <Callback auth={auth} {...props} />} />
					<SecureRoute path="/profile" component={Profile} auth={auth} />
					<Route path="/public" component={Public} />
					<SecureRoute path="/private" component={Private} auth={auth} />
					<SecureRoute path="/courses" component={Courses} auth={auth} scopes={[ 'read:courses' ]} />
				</div>
			</>
		);
	}
}

export default App;
