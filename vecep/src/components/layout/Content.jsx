import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercises from '../../views/contents/exercises/Exercises';

const Content = () => (
	<div className="content">
		<Switch>
			<Route exact path="/">
			</Route>
			<Route path="/exercicios">
				<Exercises />
			</Route>
		</Switch>
	</div>
);
export default Content;
