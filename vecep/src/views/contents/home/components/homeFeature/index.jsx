import React from 'react';
import { Container, Title, Section } from './styles';
import { Skeleton } from '@material-ui/lab';

const HomeFeature = () => (
	<Container>
		<Section placement="side">
			<Title>Separamos os conteúdos bonitinhos, pra você...</Title>
			<Skeleton variant="rect" className="skeleton" />
		</Section>

		<Section placement="results">
			<Title>Veja seus resultados</Title>
			<Skeleton variant="rect" className="skeleton" />
		</Section>

		<Section placement="practice">
			<Title>Pratique, pratique, pratique!</Title>
			<Skeleton variant="rect" className="skeleton" />
		</Section>

		<Section placement="filter">
			<Title>Filtre para achar o que você precisa!</Title>
			<Skeleton variant="rect" className="skeleton" />
		</Section>
	</Container>
);

export default HomeFeature;
