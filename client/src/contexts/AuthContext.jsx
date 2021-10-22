import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../services/auth.service';

const initialContext = {
	isLoggedIn: false
};

export const AuthContext = createContext(initialContext);

const Auth = (props) => {
	const [context, setContext] = useState(initialContext);

	useEffect(async () => {
		refreshContext();
	}, [context.isLoggedIn]);

	const refreshContext = async () => {
		const currentUser = AuthService.getCurrentUser();

		if (currentUser) {
			setContext({
				isLoggedIn: true,
				currentUser
			});
		}
	};

	return (
		<AuthContext.Provider
			value={{ ...context, setIsLoggedIn: value => setContext({ ...context, isLoggedIn: value }) }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

Auth.propTypes = {
	children: PropTypes.node.isRequired
};

export default Auth;