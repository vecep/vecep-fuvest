import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Exercises from '../../../views/contents/exercises/';
import Home from '../../../views/contents/home/';
import Tests from '../../../views/contents/tests/';
import Admin from '../../../views/contents/admin/';
import NotFound from '../../../views/contents/not-found/';
import ContentContainer from './styles.js';
import { AppContext } from '../../../contexts/StoreContext';
import 'katex/dist/katex.min.css';
import Practice from '../../../views/contents/practice';
import Login from '../../../views/contents/login';
import Register from '../../../views/contents/register';
import PrivateRoute from '../../utils/privateRoute';

const Content = () => {
	const history = useHistory();
	const { params } = useContext(AppContext);

	useEffect(() => {
		(async () => {
			if (params) {
				const newParams = new URLSearchParams();

				for (const [key, value] of Object.entries(params)) {
					if (value) {
						newParams.append(key, value);
					} else {
						newParams.delete(key);
					}
				}

				history.push({ search: newParams.toString() });
			}
		})();
	}, [params, history]);

	return (
		<ContentContainer>
			<Switch>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route path="/exercicios">
					<Exercises />
				</Route>
				<Route path="/provas">
					<Tests />
				</Route>
				<Route path="/simulado">
					<Practice />
				</Route>
				<PrivateRoute path="/admin">
					<Admin />
				</PrivateRoute>
				<Route path="/registrar">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</ContentContainer>
	);
};

export default Content;
