import * as model from '../model/ExerciseModel.js';
import * as testService from '../../test/service/TestService.js';
import * as questionService from '../../question/service/QuestionService.js';
import * as referenceService from '../../reference/service/ReferenceService.js';
import * as optionService from '../../option/service/OptionService.js';

export const post = async (exercise) => {
	try {
		const { test, references, question, options } = exercise;

		const test_id = await testService.post(test);

		const question_id = await questionService.post({ ...question, test_id });

		references.forEach(async (reference) => {
			const referenceId = await referenceService.post(reference);
			await model.postReferenceQuestion(question_id, referenceId);
		});

		options.forEach(async (option) => {
			await optionService.post({ ...option, question_id });
		});
	} catch (err) {
		throw new Error(err.message);
	}
};

export const get = async (params) => {
	try {
		const data = await model.get(params);

		const exercises = await data.map(async (d) => {
			const getOptions = async () =>
				Promise.all(JSON.parse(d.options).map(async (id) => await optionService.getOneById(id)));
			const getReferences = async () =>
				d.references &&
				Promise.all(
					JSON.parse(d.references).map(async (id) => await referenceService.getOneById(id))
				);

			return {
				...d,
				options: await getOptions(),
				references: await getReferences()
			};
		});

		return await Promise.all(exercises);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const destroy = async (id) => {
	try {
		await model.destroy(id);
	} catch (err) {
		throw new Error(err.message);
	}
};
