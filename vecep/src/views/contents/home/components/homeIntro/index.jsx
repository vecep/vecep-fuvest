import React from 'react';
import HumaaanPNG from '../../../../../images/humaaan.png';
import { Link } from 'react-router-dom';
import { HomeIntroContainer, Intro, Text, Title, Image, StyledButton } from './styles';

const HomeIntro = () => (
	<HomeIntroContainer>
		<Intro>
			<Text>
				<Title>Afinal... o que fazemos?!</Title>
				<p>
					Somos uma ferramenta que auxilia você, vestibulando da Fuvest, a
					colocar em prática os conteúdos estudados, por meio de questões específicas.
				</p>
				<p>
					Nossa missão é facilitar ao máximo sua jornada em direção à aprovação! Aqui, você pode encontrar tudo relacionado às provas da USP, desde 2010.
				</p>
			</Text>
			<Image src={HumaaanPNG} alt="" />
		</Intro>

		<StyledButton>
			<Link to="/exercicios" draggable={false}>Comece Já!</Link>
		</StyledButton>
	</HomeIntroContainer>
);

export default HomeIntro;
