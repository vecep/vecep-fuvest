import ContentContainer from './styles.js';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Exercises from '../../../views/contents/exercises/';
import Home from '../../../views/contents/home/';
import Tests from '../../../views/contents/tests/';
import Admin from '../../../views/contents/admin/';
import NotFound from '../../../views/contents/not-found/';

const Content = () => (
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
			<Route path="/admin">
				<Admin />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</ContentContainer>
);

export default Content;
