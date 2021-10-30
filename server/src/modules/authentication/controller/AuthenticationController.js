import config from '../../../config/auth.config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as userService from '../../user/service/UserService.js';

export const signup = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		await userService.post({
			username,
			email,
			password: bcrypt.hashSync(password, 8)
		});
		res.status(200).send({ message: 'Cadastro realizado com sucesso!' });
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

export const signin = async (req, res) => {
	try {
		const { username, password } = req.body;
		const [user] = await userService.getOne({ username });

		if (!user) {
			return res.status(404).send({ message: 'Usuário não encontrado.' });
		}

		const passwordIsValid = bcrypt.compareSync(password, user.password);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: 'Senha inválida.'
			});
		}

		var token = jwt.sign({ id: user.id }, config.secret, {
			expiresIn: 86400 // 24 hours
		});

		res.status(200).send({
			id: user.id,
			username: user.username,
			email: user.email,
			isAdmin: user.isAdmin,
			accessToken: token
		});
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};
