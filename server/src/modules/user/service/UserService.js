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
