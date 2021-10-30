import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, DropdownContainer, DropdownItem, DropdownContent } from './styles';
import { AppContext } from '../../../contexts/StoreContext';
import { AuthContext } from '../../../contexts/AuthContext';
import * as AuthService from '../../../services/auth';
import Avatar from '@material-ui/core/Avatar';
import './styles.js';

const Menu = () => {
	const { contextYears } = useContext(AppContext);
	const { contextSubjects } = useContext(AppContext);
	const { currentUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	const handleLogout = () => {
		AuthService.logout();
		setIsLoggedIn(false);
	};

	const renderDropdownItems = (items, rootPath, searchBase) => {
		return items.map((i) => (
			<Link
				to={{
					pathname: rootPath,
					search: `?${searchBase}=${i}`
				}}
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

					<DropdownContent>
						{renderDropdownItems(contextSubjects.sort(), '/exercicios', 'subject')}
					</DropdownContent>
				</DropdownItem>

				<DropdownItem>
					<Link to="/provas" draggable="false">
						Provas
					</Link>

					<DropdownContent>
						{renderDropdownItems(contextYears.sort().reverse(), '/provas', 'year')}
					</DropdownContent>
				</DropdownItem>

				{isLoggedIn ? (
					<DropdownItem>
						<Link to="/resultados" draggable="false">
						Seus resultados
						</Link>
					</DropdownItem>
				) : '' }
				<DropdownItem>
					{isLoggedIn ? (
						<Avatar alt={currentUser?.username}>
							{currentUser?.username.charAt(0)}
						</Avatar>
					) : (
						<Avatar alt="Imagem de perfil genérica" />
					)}
					<DropdownContent>
						{!isLoggedIn ? (
							<>
								<Link to="/login" draggable="false">
									Login
								</Link>
								<Link to="/registrar" draggable="false">
									Registrar
								</Link>
							</>
						) : (
							<>
								{currentUser?.isAdmin ? (
									<Link to="/admin" draggable="false">
								Admin
									</Link>
								) : (
									''
								)}
								<Link to="/home" onClick={handleLogout} draggable="false">
								Sair
								</Link>
							</>
						)}

					</DropdownContent>
				</DropdownItem>
			</DropdownContainer>
		</Navbar>
	);
};

export default Menu;
