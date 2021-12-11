import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useQuery from 'hooks/useQuery';
import Card from 'components/card';
import TextField from '@material-ui/core/TextField';
import { ExercisesContainer, Header, FilterContainer, SubjectTitle } from './styles';
import { StyledAutocomplete } from 'components/utils/autocomplete/style';
import { AppContext } from 'contexts/StoreContext';
import { toTitleCase } from 'utils/toTitleCase';
import { CardSkeleton } from 'components/card/styles';
import * as exerciseApi from 'apis/exercise';

const Exercises = () => {
	const location = useLocation();
	const query = useQuery();
	const { contextYears, setParams } = useContext(AppContext);

	const [exercises, setExercises] = useState([]);
	const [filteredTopics, setFilteredTopics] = useState([]);
	const [subjectTitle, setSubjectTitle] = useState('');

	useEffect(() => {
		getExercises();
		return () => {
			setExercises();
		};
	}, [location]);

	useEffect(() => {
		const subjectTitle = query.get('subject') || 'Geral';
		const filteredTopics = [...new Set(exercises.map((e) => e.question.topic))];

		setFilteredTopics(filteredTopics);
		setSubjectTitle(subjectTitle);
	}, [exercises]);

	const getExercises = async () => {
		try {
			const exercises = await exerciseApi.getAll({
				subject: query.get('subject'),
				topic: query.get('topic'),
				year: query.get('year')
			});
			setExercises(exercises);
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
				/>
			);
		});

	return (
		<ExercisesContainer>
			<Header>
				<SubjectTitle>{toTitleCase(subjectTitle)}</SubjectTitle>

				<FilterContainer>
					<StyledAutocomplete
						className="topic-filter"
						options={filteredTopics}
						onChange={(_, value) => setParams({ topic: value })}
						renderInput={(params) => (
							<TextField {...params} label="Pesquise por tema..." variant="outlined" />
						)}
					/>
					<StyledAutocomplete
						className="year-filter"
						options={contextYears}
						getOptionLabel={(o) => o.toString()}
						onChange={(_, value) => setParams({ year: value })}
						renderInput={(params) => <TextField {...params} label="Ano" variant="outlined" />}
					/>
				</FilterContainer>
			</Header>

			{exercises?.length <= 0 ? <CardSkeleton variant="rect" /> : renderCards()}
		</ExercisesContainer>
	);
};

export default Exercises;
