import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, DropdownContainer, DropdownItem, DropdownContent } from './styles';
import { normalizeWord } from '../../../utils/normalizeWord';
import './styles.js';

// mocked database select
// SELECT DISTINCT subject FROM questions
const mocked_subjects = [
	'Biologia',
	'Conhecimentos Gerais',
	'Física',
	'Geografia',
	'História',
	'Inglês',
	'Língua Portuguesa',
	'Matemática',
	'Química'
].sort();

// SELECT DISTINCT year FROM test
const mocked_years = ['2020', '2019', '2018', '2017', '2016', '2015'];

const Menu = () => {
	const renderDropdownItems = (items, root_path) => {
		return items.map((i) => (
			<Link to={`${root_path}/${normalizeWord(i.toLowerCase())}`} key={i} draggable="false">
				{i}
			</Link>
		));
	};

	return (
		<Navbar>
			<Link to="/home" draggable="false">
				VECEP
			</Link>

			<DropdownContainer>
				<DropdownItem>
					<Link to="/exercicios" draggable="false">
						Exercícios
					</Link>

					<DropdownContent>{renderDropdownItems(mocked_subjects, '/exercicios')}</DropdownContent>
				</DropdownItem>

				<DropdownItem>
					<Link to="/provas" draggable="false">
						Provas
					</Link>

					<DropdownContent>{renderDropdownItems(mocked_years, '/provas')}</DropdownContent>
				</DropdownItem>

				<DropdownItem>
					<Link to="/resultados" draggable="false">
						Seus resultados
					</Link>
				</DropdownItem>
			</DropdownContainer>
		</Navbar>
	);
};
export default Menu;
