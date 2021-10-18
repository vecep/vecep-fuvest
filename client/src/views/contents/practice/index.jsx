import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useQuery from '../../../hooks/useQuery';
import Card from '../../../components/card';
import Axios from 'axios';
import { Container, Header, Info, TimerContainer } from './styles';
import Timer from './components/timer';

const Practice = () => {
	const location = useLocation();
	const query = useQuery();

	const [exercises, setExercises] = useState([]);
	const [year, setYear] = useState();
	const [stage, setStage] = useState();
	const [readOnly, setReadOnly] = useState();

	useEffect(async () => {
		const year = query.get('year');
		const stage = query.get('stage');
		const readOnly = location.pathname.split('/').pop() === 'visualizar';

		await getExercises(year, stage);

		setYear(year);
		setStage(stage);
		setReadOnly(readOnly);
	}, [location]);

	const getExercises = async (year, stage) => {
		try {
			if(year && stage) {
				const { data } = await Axios.get('http://localhost:3001/api/exercises', {
					params: {
						year,
						stage
					}
				});

				setExercises(data);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const renderCards = () =>
		exercises.map((exercise) => {
			const { test, question, options, references } = exercise;

			return (
				<Card
					question={question}
					options={options}
					references={references}
					test={test}
					key={question.id}
					readOnly={readOnly}
				/>
			);
		});

	return (
		<>
			<Container>
				<Header>{readOnly ? 'Visualizar' : 'Simulado'}</Header>
				<Info>Fuvest {year} - {stage}ª fase</Info>
				{exercises.length > 0 ? renderCards() : 'Nothing found.'}
			</Container>
			<TimerContainer>
				{!readOnly && <Timer stage={stage} />}
			</TimerContainer>
		</>
	);
};

export default Practice;
