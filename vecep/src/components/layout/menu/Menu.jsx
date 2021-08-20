import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './style';
import { normalizeWord } from '../../../utils/normalizeWord';
import './style.js';

// mocked database select
// SELECT DISTINCT subject FROM questions
const mocked_subjects = ['Biologia', 'Conhecimentos Gerais', 'Física', 'Geografia', 'História', 'Inglês', 'Língua Portuguesa', 'Matemática', 'Química'].sort();

// SELECT DISTINCT year FROM test
const mocked_years = ['2020', '2019', '2018', '2017', '2016', '2015'];

const Menu = () => {

	const renderDropdownItems = (items, root_path) => {
		return items.map((i) => (
			<Link to={`${root_path}/${normalizeWord(i.toLowerCase())}`} key={i} draggable="false">{i}</Link>
		));
	};

	return (
		<Navbar>
			<Link to="/home" draggable="false">VECEP</Link>
			
			<div className="dropdown-container">
				<div className="dropdown">
					<Link to="/exercicios" draggable="false">Exercícios</Link>

					<div className="dropdown-content">
						{renderDropdownItems(mocked_subjects, '/exercicios')}
					</div>
				</div>

				<div className="dropdown">
					<Link to="/provas" draggable="false">Provas</Link>

					<div className="dropdown-content">
						{renderDropdownItems(mocked_years, '/provas')}
					</div>
				</div>

				<div className="dropdown">
					<Link to="/resultados" draggable="false">Seus resultados</Link>
				</div>
			</div>
		</Navbar>
	);
};
export default Menu;
