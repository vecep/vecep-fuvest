import * as model from '../model/ReferenceModel.js';

export const post = async (reference) => {
	try {
		await model.post(reference);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const get = async () => {
	try {
		return await model.get();
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getOneById = async (id) => {
	try {
		return await model.getOneById(id);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const put = async (id, data) => {
	try {
		await model.put(id, data);
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
