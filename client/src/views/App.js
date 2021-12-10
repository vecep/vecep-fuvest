import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from 'components/layout/menu/';
import Content from 'components/layout/content/';
import Store from 'contexts/StoreContext';
import Auth from 'contexts/AuthContext';

const App = () => (
	<Auth>
		<Store>
			<div className="app">
				<Router>
					<Menu />
					<Content />
				</Router>
			</div>
		</Store>
	</Auth>
);

export default App;
