import * as service from '../service/CloudinaryService.js';

export const webhook = async (req, res, next) => {
	const hook_info = req.body;

	try {
		await service.webhook(hook_info);
		res.status(200).send();
		next();
	} catch (err) {
		res.status(500) && next(err);
	}
};
