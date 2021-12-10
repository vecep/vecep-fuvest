import React from 'react';
import { Container, Title, Section, Image } from './styles';
import { Skeleton } from '@material-ui/lab';
import results from 'images/home/results.png';
import practice from 'images/home/practice.png';
import filter from 'images/home/filter.png';
import side from 'images/home/side.png';

const HomeFeature = () => (
	<Container>
		<Section placement="side">
			<Title>Separamos os conteúdos bonitinhos, pra você...</Title>
			{side
				? <Image src={side} alt="" />
				: <Skeleton variant="rect" className="skeleton" />
			}
		</Section>

		<Section placement="results">
			<Title>Veja seus resultados</Title>
			{results
				? <Image src={results} alt="" />
				: <Skeleton variant="rect" className="skeleton" />
			}
		</Section>

		<Section placement="practice">
			<Title>Pratique, pratique, pratique!</Title>
			{practice
				? <Image src={practice} alt="" />
				: <Skeleton variant="rect" className="skeleton" />
			}
		</Section>

		<Section placement="filter">
			<Title>Filtre para achar o que precisa!</Title>
			{filter
				? <Image src={filter} alt="" />
				: <Skeleton variant="rect" className="skeleton" />
			}
		</Section>
	</Container>
);

export default HomeFeature;
