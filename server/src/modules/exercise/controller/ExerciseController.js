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

export const get = async (_, res, next) => {
	try {
		const data = await service.get();
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
