import Axios from 'axios';
import authHeader from './authHeader';
import getApiUrl from '../utils/getApiUrl';

const API_URL = getApiUrl();

export const getAnswers = async () => {
	const { data: { answers } } = await Axios.get(API_URL + '/user/answers', {
		headers: authHeader()
	});
	return answers || [];
};

export const answer = async (selectedAnswer) => {
	return await Axios.post(API_URL + '/user/answer', {
		selectedAnswer
	}, { headers: authHeader() });
};

export const getStatistics = async () => {
	const { data } = await Axios.get(API_URL + '/user/statistics', { headers: authHeader() });
	return data;
};
