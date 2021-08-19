import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
	<aside className="Menu">
		<nav>
			<ul>
				<li>
					<Link to="/">VECEP</Link>
				</li>
			</ul>
		</nav>
	</aside>
);
export default Menu;
