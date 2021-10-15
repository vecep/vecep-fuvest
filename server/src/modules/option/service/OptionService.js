import * as model from '../model/OptionModel.js';
import * as imageService from '../../image/service/ImageService.js';

export const post = async (option) => {
	try {
		const { image } = option;

		const image_id = image.file ? await imageService.post(image) : null;

		await model.post({ ...option, image_id });
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
		const [result] = await model.getOneById(id);
		return result;
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
