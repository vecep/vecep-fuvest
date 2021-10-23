import Axios from 'axios';
import authHeader from './authHeader';

const BASE_URL = 'http://localhost:3001/api/';

export const getAnswers = async () => {
	const { data: { answers } } =
			await Axios.get(BASE_URL + 'user/answers', { headers: authHeader() });
	return answers || [];
};

export const answer =	async (selectedAnswer) => {
	return await Axios.post(BASE_URL + 'user/answer', {
		selectedAnswer
	}, { headers: authHeader() });
};
