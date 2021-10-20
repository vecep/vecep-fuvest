import React, { useState } from 'react';
import Popup from '../../../components/utils/popup';
import TextField from '../../../components/utils/textField';
import Button from '../../../components/utils/button';
import { isEmail } from 'validator';

import AuthService from '../../../services/auth.service';

const USERNAME_VALIDATION = {
	MIN: 3,
	MAX: 25
};

const EMAIL_VALIDATION = {
	MIN: 7,
	MAX: 50
};

const PASSWORD_VALIDATION = {
	MIN: 7,
	MAX: 40
};

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState({ message: '', severity: '' });
	const [openPopup, setOpenPopup] = useState(false);

	const onChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const validate = (field) => {
		switch (field) {
		case 'username':
			return {
				validation: () =>
					username.length >= USERNAME_VALIDATION.MIN &&
						username.length <= USERNAME_VALIDATION.MAX,
				setMessage: () =>
					setMessage({
						message: `Seu nome deve conter entre
							${USERNAME_VALIDATION.MIN} e ${USERNAME_VALIDATION.MAX}`,
						severity: 'error'
					}
					)
			};
		case 'email':
			return {
				validation: () => isEmail(email),
				setMessage: () => setMessage({ message: 'Insira um email válido.', severity: 'error' })
			};
		case 'password':
			return {
				validation: () =>
					password.length >= PASSWORD_VALIDATION.MIN &&
						password.length <= PASSWORD_VALIDATION.MAX,
				setMessage: () =>
					setMessage({
						message: `Sua senha deve conter entre
							${PASSWORD_VALIDATION.MIN} e ${PASSWORD_VALIDATION.MAX}`,
						severity: 'error'
					})
			};
		default:
			break;
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		setShowMessage(true);
		setLoading(true);

		if (
			validate('username').validation() &&
			validate('email').validation() &&
			validate('password').validation()
		) {
			try {
				const {
					data: { message }
				} = await AuthService.register(username, email, password);
				setMessage({ message, severity: 'success' });
			} catch (err) {
				console.error(err);

				const resMessage =
					(err.response && err.response.data && err.response.data.message) ||
					err.message ||
					err.toString();
				setMessage({ message: resMessage, severity: 'error' });
			} finally {
				setLoading(false);
			}
		} else {
			setLoading(false);
			!validate('username').validation() && validate('username').setMessage();
			!validate('email').validation() && validate('email').setMessage();
			!validate('password').validation() && validate('password').setMessage();
		}
		setOpenPopup(true);
	};

	const renderPopup = () => (
		<Popup
			open={openPopup}
			handleClose={() => setOpenPopup(false)}
			message={message.message || 'Preencha os campos obrigatórios.'}
			severity={message.severity}
		/>
	);

	return (
		<div>
			{renderPopup()}

			<TextField
				required
				label="Username"
				onChange={onChangeUsername}
				value={username}
				error={!username ? showMessage : !validate('username').validation()}
				helperText={
					username
						? username.length + '/' + USERNAME_VALIDATION.MAX
						: showMessage && 'Preencha o campo.'
				}
			/>
			<TextField
				required
				label="Email"
				onChange={onChangeEmail}
				value={email}
				error={!email ? showMessage : !validate('email').validation()}
				helperText={
					email ? email.length + '/' + EMAIL_VALIDATION.MAX : showMessage && 'Preencha o campo.'
				}
			/>
			<TextField
				required
				label="Senha"
				onChange={onChangePassword}
				value={password}
				error={!password ? showMessage : !validate('password').validation()}
				helperText={
					password
						? password.length + '/' + PASSWORD_VALIDATION.MAX
						: showMessage && 'Preencha o campo.'
				}
			/>

			<Button onClick={handleRegister} loading={loading} color="primary" variant="contained">
				Registrar
			</Button>
		</div>
	);
};

export default Register;
