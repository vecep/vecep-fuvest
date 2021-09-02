import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import provas from '../../../Mock/provas.json';
import TextField from '@material-ui/core/TextField';
import {
	TestsContainer,
	Filter,
	Sort,
	Row,
	Label,
	SortButton,
	ViewButton,
	SimulationButton
} from './styles';
import { StyledAutocomplete } from '../../../components/utils/autocomplete/style';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Tests = () => {
	const [selectedStage, setSelectedStage] = useState();
	const [sortType, setSortType] = useState('desc');

	const filteredTests = provas.filter((p) => (selectedStage ? p.stage === selectedStage : true));

	const orderedTests = filteredTests.sort((a, b) =>
		sortType === 'desc' ? b.year - a.year : a.year - b.year
	);

	const renderProvas = () =>
		orderedTests.map((p) => (
			<Row key={p.id}>
				<Label>
					{p.year} - {p.stage}ª Fase
				</Label>

				<ViewButton>
					<Link to="#" draggable={false}>
						Visualizar Prova
					</Link>
				</ViewButton>

				<SimulationButton>
					<Link to="#" draggable={false}>
						Fazer Simulado
					</Link>
				</SimulationButton>
			</Row>
		));

	const renderSort = () => (
		<Sort>
			<SortButton
				className="button"
				onClick={() => setSortType('asc')}
				selected={sortType === 'asc'}
			>
				<ArrowDropUpIcon />
			</SortButton>
			<SortButton
				className="button"
				onClick={() => setSortType('desc')}
				selected={sortType === 'desc'}
			>
				<ArrowDropDownIcon />
			</SortButton>
		</Sort>
	);

	return (
		<TestsContainer>
			<Filter>
				{renderSort()}
				<StyledAutocomplete
					className="filter"
					options={[1, 2]}
					getOptionLabel={(o) => `${o.toString()}ª Fase`}
					onChange={(_, value) => setSelectedStage(value)}
					renderInput={(params) => (
						<TextField {...params} label="Pesquise por fase..." variant="outlined" />
					)}
				/>
			</Filter>
			{renderProvas()}
		</TestsContainer>
	);
};

export default Tests;
