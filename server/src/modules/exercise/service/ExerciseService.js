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

export const get = async () => {
	try {
		const data = await model.get();

		const parsedData = data.map((d) => {
			return {
				...d,
				options: JSON.parse(d.options),
				references: JSON.parse(d.references)
			};
		});

		return parsedData;
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
