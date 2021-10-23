import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import * as AuthService from '../../../services/auth';

const PrivateRoute = ({ children, ...otherProps }) => {
	const { accessToken, isAdmin } = AuthService.getCurrentUser() || '';

	return (
		<Route
			{...otherProps}
		>
			{
				accessToken && isAdmin ? (
					{ ...children }
				) : (
					<Redirect
						to={{
							pathname: '/login'
						}}
					/>
				)
			}
		</Route>
	);
};

PrivateRoute.propTypes = {
	children: PropTypes.any.isRequired,
	otherProps: PropTypes.any
};

export default PrivateRoute;
