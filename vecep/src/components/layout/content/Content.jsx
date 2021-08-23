import ContentContainer from './style.js';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercises from '../../../views/contents/exercises/Exercises';
import Home from '../../../views/contents/home/Home.jsx';

const Content = () => (
	<ContentContainer>
		<Switch>
			<Route exact path="/home">
				<Home />
			</Route>
			<Route path="/exercicios">
				<Exercises />
			</Route>
		</Switch>
	</ContentContainer>
);
export default Content;
