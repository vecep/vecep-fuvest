import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import SideMenu from '../components/layout/SideMenu';

const App = () => (
	<div className="App">
		<Router>
			<Menu />
			<div className="side-menu-content">
				<div className="side-menu-content"> 
					<Route path={['/exercicios', '/provas', '/resultados']} component={SideMenu} />
					<Content />
				</div>
			</div>
		</Router>
	</div>
);

export default App;
