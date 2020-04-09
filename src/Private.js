import React, { Component } from 'react';

class Private extends Component {
	state = {
		message: ''
	};

	componentDidMount() {
		fetch('/private', {
			headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
		})
			.then((response) => {
				if (response.ok) return response.json(); //convert response to Json
				throw new Error('Networl response was not ok.');
			})
			.then((response) => this.setState({ message: response.message })) // handle json response
			.catch((error) => this.setState({ message: error.message })); //catch  any errors that may be returned
	}

	render() {
		return <p>{this.state.message}</p>;
	}
}

export default Private;
