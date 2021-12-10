import React, { useContext, useState } from 'react';
import Popup from '../../../components/utils/popup';
import TextField from '../../../components/utils/textField';
import { isEmail } from 'validator';
import { AuthContext } from '../../../contexts/AuthContext';
import * as authApi from 'apis/auth';
import { useHistory } from 'react-router';
import { Container, FormContainer, PasswordContainer, RegisterButton, LoginLink } from './styles';
import { Typography } from '@material-ui/core';

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
	const { setIsLoggedIn } = useContext(AuthContext);

	const history = useHistory();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
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

	const onChangePasswordConfirmation = (e) => {
		setPasswordConfirmation(e.target.value);
	};

	const validate = (field) => {
		switch (field) {
		case 'username': {
			return username && username.length >= USERNAME_VALIDATION.MIN &&
				username.length <= USERNAME_VALIDATION.MAX;
		}
		case 'email': {
			return email && isEmail(email);
		}
		case 'password': {
			return password &&
				password.length >= PASSWORD_VALIDATION.MIN && password.length <= PASSWORD_VALIDATION.MAX;
		}
		case 'passwordConfirmation': {
			return passwordConfirmation && passwordConfirmation === password;
		}
		case 'all': {
			if (!validate('username')) {
				setMessage({
					message: `Seu nome deve conter entre
						${USERNAME_VALIDATION.MIN} e ${USERNAME_VALIDATION.MAX}`,
					severity: 'error'
				});
			} else if (!validate('email')) {
				setMessage({ message: 'Insira um email válido.', severity: 'error' });
			} else if (!validate('password')) {
				setMessage({
					message: `Sua senha deve conter entre
						${PASSWORD_VALIDATION.MIN} e ${PASSWORD_VALIDATION.MAX}`,
					severity: 'error'
				});
			} else if (!validate('passwordConfirmation')) {
				setMessage({ message: 'A confirmação de senha não corresponde.', severity: 'error' });
			}

			return (
				validate('username') &&
					validate('email') &&
					validate('password') &&
					validate('passwordConfirmation')
			);
		}
		default:
			break;
		}
	};

	const autoLogin = async () => {
		await authApi.login(username, password);
		setIsLoggedIn(true);
		history.push('/exercicios');
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		setShowMessage(true);
		setLoading(true);

		if (validate('all')) {
			try {
				const {
					data: { message }
				} = await authApi.register(username, email, password);
				setMessage({ message, severity: 'success' });
				autoLogin();
			} catch (err) {
				console.error(err);

				const resMessage =
					(err.response && err.response.data && err.response.data.message) ||
					err.message ||
					err.toString();
				setMessage({ message: resMessage, severity: 'error' });
			}
		}
		setLoading(false);
		setOpenPopup(true);
	};

	const renderPopup = () => (
		<Popup
			open={openPopup}
			handleClose={() => setOpenPopup(false)}
			message={message.message || 'Preencha os campos obrigatórios.'}
			severity={message.severity || 'error'}
		/>
	);

	return (
		<Container>
			{renderPopup()}
			<FormContainer>
				<Typography variant="h4">Cadastre-se gratuitamente!</Typography>
				<TextField
					required
					label="Username"
					onChange={onChangeUsername}
					value={username}
					error={!username ? showMessage : !validate('username')}
					helperText={
						username
							? username.length + '/' + USERNAME_VALIDATION.MAX
							: showMessage && 'Preencha o campo.'
					}
					placeholder="Fulano Beltrano"
				/>
				<TextField
					required
					label="Email"
					onChange={onChangeEmail}
					value={email}
					error={!email ? showMessage : !validate('email')}
					helperText={
						email ? email.length + '/' + EMAIL_VALIDATION.MAX : showMessage && 'Preencha o campo.'
					}
					placeholder="exemplo@email.com"
				/>
				<PasswordContainer>
					<TextField
						required
						label="Senha"
						onChange={onChangePassword}
						value={password}
						error={!password ? showMessage : !validate('password')}
						helperText={
							password
								? password.length + '/' + PASSWORD_VALIDATION.MAX
								: showMessage && 'Preencha o campo.'
						}
						type="password"
					/>
					<TextField
						required
						label="Confirme sua senha"
						onChange={onChangePasswordConfirmation}
						value={passwordConfirmation}
						error={
							!passwordConfirmation ? showMessage : !validate('passwordConfirmation')
						}
						helperText={showMessage && 'Preencha o campo.'}
						type="password"
					/>
				</PasswordContainer>
			</FormContainer>
			<RegisterButton
				onClick={handleRegister}
				loading={loading}
				color="primary"
				variant="contained"
			>
				Registrar
			</RegisterButton>
			<LoginLink to="/login" draggable="false">
				Já possui uma conta? Faça login.
			</LoginLink>
		</Container>
	);
};

export default Register;
