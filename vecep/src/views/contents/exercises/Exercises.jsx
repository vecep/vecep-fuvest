import React from 'react';
import { useLocation } from 'react-router-dom';

const Exercises = () => {
	const location = useLocation();

	const filter = location.pathname.match(/[^/]\w+$/g);

	return (
		<div className="Content">
			<div>Exercicios<br/>Filtro: {filter}</div>
		</div> 
	);
};
export default Exercises;
