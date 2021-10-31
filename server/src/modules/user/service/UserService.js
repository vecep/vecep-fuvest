import * as model from '../model/UserModel.js';
import * as optionService from '../../option/service/OptionService.js';

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
	const checkDuplicateAnswer = async () => {
		const selectedAnswerOption = await optionService.getOneById(selectedAnswer);
		const { answers: answersIds } = await getAnswers(userId);

		if (answersIds) {
			const alreadyAnsweredOption = await Promise.all(
				answersIds.map(async (answerId) => await optionService.getOneById(answerId))
			).then((options) => {
				options.find(
					({ questionId, id }) =>
						questionId === selectedAnswerOption.questionId && answersIds.includes(id)
				);
			});

			if (alreadyAnsweredOption) {
				await destroyAnswer(alreadyAnsweredOption.id, userId);
			}
		}
	};

	try {
		await checkDuplicateAnswer();
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

export const destroyAnswer = async (optionId, userId) => {
	try {
		await model.destroyAnswer(optionId, userId);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getStatistics = async (userId) => {
	try {
		const [generalStatistics] = await model.getGeneralStatistics(userId);
		const statsBySubject = await model.getStatsBySubject(userId);

		return {
			...generalStatistics,
			totalRightAnswers: generalStatistics.totalRightAnswers || 0,
			statsBySubject
		};
	} catch (err) {
		throw new Error(err.message);
	}
};
