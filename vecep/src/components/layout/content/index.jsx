import ContentContainer from './styles.js';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercises from '../../../views/contents/exercises';
import Home from '../../../views/contents/home';
import Tests from '../../../views/contents/tests/';

const Content = () => (
	<ContentContainer>
		<Switch>
			<Route exact path="/home">
				<Home />
			</Route>
			<Route path="/exercicios">
				<Exercises />
			</Route>
			<Route path="/provas">
				<Tests />
			</Route>
		</Switch>
	</ContentContainer>
);

export default Content;
