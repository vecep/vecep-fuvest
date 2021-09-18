import * as model from '../model/ImageModel.js';
import cloudinary from '../../../../utils/cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();

export const post = async (data) => {
	try {
		const { description, image } = data;
		const { secure_url: url } = await cloudinary.v2.uploader.upload(image, {
			upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET
		});

		await model.post({ description, image_path: url });
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
