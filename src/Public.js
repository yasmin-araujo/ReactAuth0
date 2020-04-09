import React, { Component } from 'react';

class Public extends Component {
	state = {
		message: ''
	};

	componentDidMount() {
		fetch('/public')
			.then((response) => {
				if (response.ok) return response.json(); //convert response to Json
				throw new Error('Network response was not ok.');
			})
            .then((response) => this.setState({ message: response.message })) // handle json response
            .catch(error => this.setState({ message: error.message })); //catch  any errors that may be returned
	}

	render() {
		return <p>{this.state.message}</p>;
	}
}

export default Public;
