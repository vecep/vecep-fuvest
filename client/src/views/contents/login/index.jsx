import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Popup from '../../../components/utils/popup';
import TextField from '../../../components/utils/textField';
import { AuthContext } from '../../../contexts/AuthContext';
import AuthService from '../../../services/auth.service';
import { Container, FormContainer, LoginButton, StyledLink } from './styles';
import { Typography } from '@material-ui/core';

const Login = () => {
	const history = useHistory();

	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');
	const [openPopup, setOpenPopup] = useState(false);

	useEffect(() => {
		if (isLoggedIn && !loading) {
			history.push('/exercicios');
		}
	}, [isLoggedIn, loading]);

	const onChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		setShowMessage(true);
		setLoading(true);

		if (username && password) {
			try {
				await AuthService.login(username, password);
				setIsLoggedIn(true);
			} catch (err) {
				console.error(err);

				const resMessage =
					(err.response && err.response.data && err.response.data.message) ||
					err.message ||
					err.toString();
				setMessage(resMessage);
			} finally {
				setOpenPopup(true);
				setLoading(false);
			}
		}
	};

	const renderPopup = () => (
		<Popup
			open={openPopup}
			handleClose={() => setOpenPopup(false)}
			message={message || 'Preencha os campos obrigatórios.'}
			severity="error"
		/>
	);

	return (
		<Container>
			{renderPopup()}

			<FormContainer>
				<Typography variant="h4">Bem-vind_ de volta!</Typography>
				<TextField
					required
					label="Username"
					onChange={onChangeUsername}
					value={username}
					error={showMessage && !username}
					helperText={
						showMessage && !username ? 'Preencha o campo.' : ''
					}
				/>

				<TextField
					required
					label="Senha"
					onChange={onChangePassword}
					value={password}
					error={showMessage && !password}
					helperText={
						showMessage && !password ? 'Preencha o campo.' : ''
					}
					type="password"
				/>
			</FormContainer>

			<LoginButton onClick={handleLogin} loading={loading} color="primary" variant="contained">
						Login
			</LoginButton>

			<StyledLink to="/registrar" draggable="false">
				Ainda não tem uma conta? Crie agora!
			</StyledLink>
		</Container>
	);
};

export default Login;
