import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, DropdownContainer, DropdownItem, DropdownContent } from './styles';
import { normalizeWord } from '../../../utils/normalizeWord';
import { AppContext } from '../../../contexts/store';
import './styles.js';

const Menu = () => {
	const { contextYears } = useContext(AppContext);
	const { contextSubjects } = useContext(AppContext);

	const renderDropdownItems = (items, root_path) => {
		return items.map((i) => (
			<Link
				to={`${root_path}/${normalizeWord(i.toString().toLowerCase())}`}
				key={i}
				draggable="false"
			>
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

					<DropdownContent>{renderDropdownItems(contextSubjects, '/exercicios')}</DropdownContent>
				</DropdownItem>

				<DropdownItem>
					<Link to="/provas" draggable="false">
						Provas
					</Link>

					<DropdownContent>{renderDropdownItems(contextYears, '/provas')}</DropdownContent>
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
