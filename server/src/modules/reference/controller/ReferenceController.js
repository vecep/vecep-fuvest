import * as service from '../service/ReferenceService.js';

export const post = async (req, res, next) => {
	const reference = req.body;

	try {
		await service.post(reference);
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

export const getOneById = async (req, res, next) => {
	const { id } = req.params;

	try {
		const data = await service.getOneById(id);
		res.status(200).json(data);
		next();
	} catch (err) {
		res.status(500) && next(err);
	}
};

export const put = async (req, res, next) => {
	const data = req.body;
	const { id } = req.params;

	try {
		await service.put(id, data);
		res.status(200).send();
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
