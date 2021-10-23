import Axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth/';

export const login = async (username, password) => {
	const { data } = await Axios.post(API_URL + 'signin', {
		username,
		password
	});
	data.accessToken && localStorage.setItem('user', JSON.stringify(data));

	return data;
};

export const logout = async () => {
	localStorage.removeItem('user');
};

export const register = async (username, email, password) => {
	return Axios.post(API_URL + 'signup', {
		username,
		email,
		password
	});
};

export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};
