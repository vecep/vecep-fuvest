import * as service from '../service/ExerciseService.js';

export const post = async (req, res, next) => {
	const exercises = req.body;

	try {
		await service.post(exercises);
		res.status(200).send();
		next();
	} catch (err) {
		res.status(500) && next(err);
	}
};

export const get = async (req, res, next) => {
	try {
		const params = req.query;

		const data = await service.get(params);
		res.status(200).json(data);
		next();
	} catch (err) {
		res.status(500) && next(err);
	}
};

export const destroy = async (req, res, next) => {
	const { id } = req.params;

	try {
		await service.destroy(id);
		res.status(204).send();
		next();
	} catch (err) {
		res.status(500) && next(err);
	}
};
