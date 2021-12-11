import axios from 'axios';
import getApiUrl from 'utils/getApiUrl';
import authHeader from 'utils/authHeader';

const API_URL = getApiUrl();

export const getAll = query => axios.get(API_URL + '/exercises', { params: query })
	.then(response => response.data);

export const post = exercise => axios.post(API_URL + '/exercise', exercise, {
	headers: { 'Content-Type': 'application/json', ...authHeader() }
});

export const getTotal = () => axios.get(API_URL + '/exercises/total')
	.then(response => response.data);
