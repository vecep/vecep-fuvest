import React, { useContext } from 'react';
import HumaaanPNG from '../../../../../images/humaaan.png';
import { Link } from 'react-router-dom';
import { Container, Intro, Text, Title, Image, StyledButton } from './styles';
import { AuthContext } from '../../../../../contexts/AuthContext';

const HomeIntro = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<Container>
			<Intro>
				<Text>
					<Title>Afinal... o que fazemos?!</Title>
					<p>
					Somos uma ferramenta que auxilia você, vestibulando da Fuvest, a colocar em prática os
					conteúdos estudados, por meio de questões específicas.
					</p>
					<p>
					Nossa missão é facilitar ao máximo sua jornada em direção à aprovação! Aqui, você pode
					encontrar tudo relacionado às provas da USP, desde 2010.
					</p>
				</Text>
				<Image src={HumaaanPNG} alt="" />
			</Intro>

			<StyledButton>
				<Link to={isLoggedIn ? '/exercicios' : '/registrar'} draggable={false}>
				Comece Já!
				</Link>
			</StyledButton>
		</Container>
	);
};

export default HomeIntro;
