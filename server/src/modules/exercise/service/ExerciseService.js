import * as model from '../model/ExerciseModel.js';

export const post = async (exercises) => {
	try {
		await model.post(exercises);
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
