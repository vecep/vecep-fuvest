import * as model from '../model/UserModel.js';

export const post = async (user) => {
	try {
		return await model.post(user);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getOne = async (params) => {
	try {
		return await model.getOne(params);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const answer = async (userId, selectedAnswer) => {
	try {
		return await model.answer(userId, selectedAnswer);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getAnswers = async (id) => {
	try {
		const [answers] = await model.getAnswers(id);
		return answers;
	} catch (err) {
		throw new Error(err.message);
	}
};
