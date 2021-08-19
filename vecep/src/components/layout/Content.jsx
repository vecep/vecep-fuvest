import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercises from '../../views/contents/exercises/Exercises';

const Content = () => (
	<main className="Content">
		<Switch>
			<Route exact path="/">
			</Route>
			<Route path="/exercicios">
				<Exercises />
			</Route>
		</Switch>
	</main>
);
export default Content;
