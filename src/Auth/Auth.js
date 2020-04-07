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
}
