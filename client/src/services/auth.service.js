import Axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth/';

class AuthService {
	async login(username, password) {
		const { data } = await Axios.post(API_URL + 'signin', {
			username,
			password
		});
		data.accessToken && localStorage.setItem('user', JSON.stringify(data));

		return data;
	}

	logout() {
		localStorage.removeItem('user');
	}

	async register(username, email, password) {
		return Axios.post(API_URL + 'signup', {
			username,
			email,
			password
		});
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user'));
	}
}

export default new AuthService();
