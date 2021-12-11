import axios from 'axios';
import getApiUrl from 'utils/getApiUrl';

const API_URL = getApiUrl();

export const getAll = query => axios.get(API_URL + '/questions', { params: query })
	.then(response => response.data);
