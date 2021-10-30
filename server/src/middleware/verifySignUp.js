import * as userService from '../modules/user/service/UserService.js';

const checkDuplicateUsernameAndEmail = async (req, res, next) => {
	const { username, email } = req.body;

	const userByUsername = await userService.getOne({ username });
	if (userByUsername.length > 0) {
		res.status(400).send({
			message: 'Esse nome já está sendo usado.'
		});
		return;
	}

	const userByEmail = await userService.getOne({ email });
	if (userByEmail.length > 0) {
		res.status(400).send({
			message: 'Esse email já está sendo usado.'
		});
		return;
	}
	next();
};

const verifySignUp = {
	checkDuplicateUsernameAndEmail
};

export default verifySignUp;
