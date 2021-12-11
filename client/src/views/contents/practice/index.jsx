import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useQuery from 'hooks/useQuery';
import Card from 'components/card';
import { Container, Header, Info, TimerContainer } from './styles';
import Timer from './components/timer';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { CardSkeleton } from 'components/card/styles';
import Popup from 'components/utils/popup';
import * as exerciseApi from 'apis/exercise';

const Practice = () => {
	const location = useLocation();
	const query = useQuery();

	const [exercises, setExercises] = useState();
	const [year, setYear] = useState();
	const [stage, setStage] = useState();
	const [readOnly, setReadOnly] = useState(true);
	const [paused, setPaused] = useState(true);
	const [openPopup, setOpenPopup] = useState(false);

	useEffect(() => {
		const year = query.get('year');
		const stage = query.get('stage');
		const readOnly = location.pathname.split('/').pop() === 'visualizar';
		getExercises({ year, stage });

		setYear(year);
		setStage(stage);
		setReadOnly(readOnly);

		return () => {
			setYear();
			setStage();
			setReadOnly();
		};
	}, [location]);

	const getExercises = query => {
		try {
			exerciseApi.getAll(query).then(exercises => {
				if (exercises.length === 0) {
					setOpenPopup(true);
				} else {
					setExercises(exercises);
				}
			});
		} catch (err) {
			console.error(err);
		}
	};

	const renderCards = () =>
		exercises?.map((exercise) => {
			const { test, question, options, references } = exercise;

			return (
				<Card
					question={question}
					options={options}
					references={references}
					test={test}
					key={question.id}
					readOnly={readOnly || paused}
					baseCard
				/>
			);
		});

	const renderSkeleton = () => {
		return (
			<>
				<Typography variant="h4">
					<Skeleton width="200px" />
				</Typography>

				<CardSkeleton variant="rect" />
			</>
		);
	};

	const renderPopup = () => (
		<Popup
			open={openPopup}
			handleClose={() => setOpenPopup(false)}
			message="Nenhuma prova encontrada."
			severity="error"
		/>
	);

	const renderTimer = () => (
		<TimerContainer>
			{!readOnly && exercises && <Timer stage={stage} paused={paused} setPaused={setPaused} />}
		</TimerContainer>
	);

	const renderInfo = () => (
		<Info>
		Fuvest {year} - {stage}ª fase
		</Info>
	);

	return (
		<>
			<Container>
				<Header>{readOnly ? 'Visualizar' : 'Simulado'}</Header>
				{!exercises
					? renderSkeleton()
					: (
						<>
							{renderInfo()}
							{renderCards()}
						</>
					)}
				{renderPopup()}
			</Container>
			{renderTimer()}
		</>
	);
};

export default Practice;
