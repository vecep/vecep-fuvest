import jwt from 'jsonwebtoken';
import config from '../config/auth.config.js';
import * as userService from '../modules/user/service/UserService.js';

const verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];

	if (!token) {
		return res.status(403).send({
			message: 'Nenhum token encontrado!'
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: 'Sem autorização!'
			});
		}
		req.userId = decoded.id;
		next();
	});
};

const isAdmin = async (req, res, next) => {
	const { userId } = req;

	const [user] = await userService.getOne({ id: userId });

	if (user.isAdmin) {
		next();
		return;
	}

	res.status(403).send({
		message: 'Permissão de ADMIN necessária.'
	});
	return;
};

export default {
	verifyToken,
	isAdmin
};
