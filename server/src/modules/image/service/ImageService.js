import * as model from '../model/ImageModel.js';
import * as cloudinaryService from '../service/CloudinaryService.js';

export const post = async (data) => {
	try {
		const { description, file } = data;

		const cloud_id = await cloudinaryService.post(file);
		const result = await model.post({ description, cloud_id });
		const { insertId } = result.shift();

		return insertId;
	} catch (err) {
		throw new Error(err);
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
		const { cloud_id: new_id } = data;
		const [{ cloud_id: old_id }] = await getOneById(id);

		await cloudinaryService.patch(old_id, new_id);
		await model.put(id, data);
	} catch (err) {
		throw new Error(err.message);
	}
};

export const destroy = async (id) => {
	try {
		const [{ cloud_id }] = await model.getOneById(id);

		await cloudinaryService.destroy(cloud_id);
		await model.destroy(id);
	} catch (err) {
		throw new Error(err.message);
	}
};
