import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {
	TestsContainer,
	Filter,
	Sort,
	Row,
	Label,
	SortButton,
	ViewButton,
	PracticeButton
} from './styles';
import { StyledAutocomplete } from '../../../components/utils/autocomplete/style';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Axios from 'axios';
import { AppContext } from '../../../contexts/StoreContext';
import useQuery from '../../../hooks/useQuery';

const Tests = () => {
	const location = useLocation();
	const query = useQuery();
	const { setParams } = useContext(AppContext);

	const [tests, setTests] = useState([]);
	const [sortType, setSortType] = useState('desc');

	useEffect(async () => {
		await getTests();
	}, [location]);

	const getTests = async () => {
		try {
			const { data } = await Axios.get('http://localhost:3001/api/tests', {
				params: { year: query.get('year'), stage: query.get('stage') }
			});
			setTests(data);
		} catch (err) {
			console.error(err);
		}
	};

	const orderedTests = tests.sort((a, b) =>
		sortType === 'desc' ? b.year - a.year : a.year - b.year
	);

	const renderProvas = () =>
		orderedTests.map((p) => (
			<Row key={p.id}>
				<Label>
					{p.year} - {p.stage}ª Fase
				</Label>

				<ViewButton case="capitalize">
					<Link
						to={{
							pathname: 'simulado/visualizar',
							search: `?year=${p.year}&stage=${p.stage}`
						}}
						draggable={false}
					>
						Visualizar Prova
					</Link>
				</ViewButton>

				<PracticeButton variant="contained" color="primary" case="capitalize">
					<Link
						to={{
							pathname: 'simulado',
							search: `?year=${p.year}&stage=${p.stage}`
						}}
						draggable={false}
					>
						Fazer Simulado
					</Link>
				</PracticeButton>
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
					onChange={(_, value) => setParams({ stage: value })}
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
