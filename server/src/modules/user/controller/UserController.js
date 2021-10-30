import * as userService from '../service/UserService.js';

export const answer = async (req, res, next) => {
	try {
		await userService.answer(req.userId, req.body.selectedAnswer);
		res.status(200).send({ message: 'Resposta enviada.' });
		next();
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

export const getAnswers = async (req, res, next) => {
	try {
		const answers = await userService.getAnswers(req.userId);
		res.status(200).send(answers);
		next();
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};
