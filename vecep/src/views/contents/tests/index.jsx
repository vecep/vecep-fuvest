import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import provas from '../../../Mock/provas.json';
import TextField from '@material-ui/core/TextField';
import { StyledAutocomplete } from '../../../components/utils/autocomplete/style';
import { TestsContainer, Row, Label, ViewButton, SimulationButton } from './styles';

const Tests = () => {
	const [selectedStage, setSelectedStage] = useState();

	const filteredProvas = provas.filter((p) =>
		selectedStage != null ? p.stage === selectedStage : true
	);

	const renderProvas = () =>
		filteredProvas.map((p) => (
			<Row key={p.id}>
				<Label>
					{p.year} - {p.stage}ª Fase
				</Label>

				<ViewButton>
					<Link to="#">Visualizar Prova</Link>
				</ViewButton>

				<SimulationButton>
					<Link to="#">Fazer Simulado</Link>
				</SimulationButton>
			</Row>
		));

	return (
		<TestsContainer>
			<StyledAutocomplete
				options={[0, 1]}
				getOptionLabel={(o) => o.toString()}
				onChange={(_, value) => setSelectedStage(value)}
				renderInput={(params) => (
					<TextField {...params} label="Pesquise por fase..." variant="outlined" />
				)}
			/>
			{renderProvas()}
		</TestsContainer>
	);
};

export default Tests;
