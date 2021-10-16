import * as model from '../model/TestModel.js';

export const post = async (test) => {
	try {
		const [data] = await model.post(test);

		return data.id;
	} catch (err) {
		throw new Error(err.message);
	}
};

export const get = async (params) => {
	try {
		return await model.get(params);
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
