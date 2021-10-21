import Axios from 'axios';
import authHeader from './authHeader';

const BASE_URL = 'http://localhost:3001/api/';

class UserService {
	async getAnswers() {
		const { data: { answers } } =
			await Axios.get(BASE_URL + 'user/answers', { headers: authHeader() });
		return answers;
	}

	answer(selectedAnswer) {
		return Axios.post(BASE_URL + 'user/answer', {
			selectedAnswer
		}, { headers: authHeader() });
	}
}

export default new UserService();
