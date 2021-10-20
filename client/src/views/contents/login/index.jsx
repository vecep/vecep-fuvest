import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Popup from '../../../components/utils/popup';
import TextField from '../../../components/utils/textField';
import Button from '../../../components/utils/button';

import AuthService from '../../../services/auth.service';

const Login = () => {
	const history = useHistory();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');
	const [openPopup, setOpenPopup] = useState(false);

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
				history.push('/exercicios');
			} catch (err) {
				console.error(err);

				const resMessage =
					(err.response && err.response.data && err.response.data.message) ||
					err.message ||
					err.toString();
				setMessage(resMessage);
				setLoading(false);
			}
		} else {
			setLoading(false);
		}
		setOpenPopup(true);
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
		<div>
			{renderPopup()}
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
			/>

			<Button onClick={handleLogin} loading={loading} color="primary" variant="contained">
						Login
			</Button>
		</div>
	);
};

export default Login;
