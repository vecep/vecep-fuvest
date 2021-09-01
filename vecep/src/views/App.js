import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/layout/menu/';
import Content from '../components/layout/content/';

const App = () => (
	<div className="app">
		<Router>
			<Menu />
			<Content />
		</Router>
	</div>
);

export default App;
