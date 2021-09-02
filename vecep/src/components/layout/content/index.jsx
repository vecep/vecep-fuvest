import ContentContainer from './styles.js';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Exercises from '../../../views/contents/exercises/Exercises';
import Home from '../../../views/contents/home/Home';
import Tests from '../../../views/contents/tests/';
import NotFound from '../../../views/contents/not-found/NotFound';

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
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</ContentContainer>
);

export default Content;
