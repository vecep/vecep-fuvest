import ContentContainer from './style.js';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercises from '../../../views/contents/exercises/Exercises';

const Content = () => (
	<ContentContainer>
		<Switch>
			<Route exact path="/">
			</Route>
			<Route path="/exercicios">
				<Exercises />
			</Route>
		</Switch>
	</ContentContainer>
);
export default Content;
