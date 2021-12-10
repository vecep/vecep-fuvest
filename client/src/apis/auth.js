import Axios from 'axios';
import getApiUrl from 'utils/getApiUrl';

const API_URL = getApiUrl();

export const login = async (username, password) => {
	const { data } = await Axios.post(API_URL + '/auth/signin', {
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
	return Axios.post(API_URL + '/auth/signup', {
		username,
		email,
		password
	});
};

export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};
