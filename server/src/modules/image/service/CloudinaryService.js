import * as model from '../model/ImageModel.js';
import cloudinary from '../../../utils/cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();

export const post = async (image) => {
	try {
		const { public_id } = await cloudinary.v2.uploader.upload(image, {
			upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET
		});

		return public_id;
	} catch (err) {
		throw new Error(err);
	}
};

export const patch = async (from_public_id, to_public_id) => {
	try {
		await cloudinary.v2.uploader.rename(from_public_id, to_public_id);
	} catch (err) {
		throw new Error(err);
	}
};

export const destroy = async (public_id) => {
	try {
		await cloudinary.v2.uploader.destroy(public_id);
	} catch (err) {
		throw new Error(err);
	}
};

export const webhook = async (hook_info) => {
	const patch = async (old_id, new_id) => {
		try {
			await model.patchOnHook(old_id, new_id);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	const destroy = async (resources) => {
		try {
			const promises = resources.map(async (r) => await model.destroyOnHook(r.public_id));

			await Promise.all(promises);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	try {
		const { notification_type } = hook_info;

		switch (notification_type) {
			case 'rename':
				const { from_public_id, to_public_id } = hook_info;
				await patch(from_public_id, to_public_id);
				break;
			case 'delete':
				const { resources } = hook_info;
				await destroy(resources);
				break;
			default:
				break;
		}
	} catch (err) {
		throw new Error(err.message);
	}
};
