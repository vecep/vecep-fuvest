import * as model from '../model/ReferenceModel.js';
import * as imageService from '../../image/service/ImageService.js';
import { isEmpty } from 'lodash-es';

export const post = async (reference) => {
	try {
		const { image } = reference;

		const image_id = !isEmpty(image) ? await imageService.post(image) : null;
		const result = await model.post({ ...reference, image_id });
		const { insertId } = result.shift();

		return insertId;
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
