import auth0 from 'auth0-js';

export default class Auth {
	constructor(history) {
		this.history = history;
		this.auth0 = new auth0.WebAuth({
			domain: process.env.REACT_APP_AUTH0_DOMAIN,
			clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
			redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
			responseType: 'token id_token', // token: so user can make API calls // id_token: JWT token to authenticate the user when they login
			scope: 'openid profile email' // permissions
		});
	}

	login = () => {
		this.auth0.authorize(); // redirect the browser to the Auth0 login page
	};

	handleAuthentication = () => {
		// Get the data that was passed over in the URL, parse that out and get individual pieces out of it and then write that data to our session

		this.auth0.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				this.setSession(authResult);
				this.history.push('/');
			} else if (err) {
				this.history.push('/');
				alert(`Error: ${err.error}. Check the console for further details. `);
				console.log(err);
			} else console.log('ue');
		});
	};

	setSession = (authResult) => {
		//set the time that the acess token will expire
		// seconds * 1000(to converto into miliseconds)
		const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
	};

	isAuthenticated() {
		// Check whether the current time is passed the access tokens
		const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}
