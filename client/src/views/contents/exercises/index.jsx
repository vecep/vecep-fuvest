import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../../components/card';
import TextField from '@material-ui/core/TextField';
import { ExercisesContainer, Header, FilterContainer, SubjectTitle } from './styles';
import { StyledAutocomplete } from '../../../components/utils/autocomplete/style';
import { normalizeWord } from '../../../utils/normalizeWord';
import { AppContext } from '../../../contexts/store';
import Axios from 'axios';

const Exercises = () => {
	const location = useLocation();

	const { contextYears } = useContext(AppContext);

	const [exercises, setExercises] = useState([]);
	const [selectedYear, setSelectedYear] = useState();
	const [selectedTopic, setSelectedTopic] = useState();
	const [filter, setFilter] = useState();
	const [filteredTopics, setFilteredTopics] = useState([]);
	const [subjectTitle, setSubjectTitle] = useState();
	const [filteredExercises, setFilteredExercises] = useState([]);

	useEffect(async () => {
		const { data: exercises } = await Axios.get('http://localhost:3001/api/exercises');

		setExercises(exercises);
		setFilteredExercises(exercises);
	}, []);

	useEffect(() => {
		const filter = location.pathname.split('/').pop();
		setFilter(filter);
	}, [location]);

	useEffect(() => {
		const filteredExercises = exercises.filter(exercise => {
			const { test, question } = exercise;

			const filterBySubject = filter === normalizeWord(question.subject) || filter === 'exercicios';
			const filterByTopic = selectedTopic
				? question.topic.toLowerCase() === selectedTopic.toLowerCase()
				: true;
			const filterByYear = selectedYear ? test.year === selectedYear : true;

			return filterBySubject && filterByTopic && filterByYear;
		});

		setFilteredExercises(filteredExercises);
	}, [selectedYear, selectedTopic, filter]);

	useEffect(() => {
		const filteredSubjects = [...new Set(filteredExercises.map(fe => fe.question.subject))];
		const subjectTitle = filteredSubjects.some((c) => c !== filteredSubjects[0])
			? null
			: filteredSubjects.shift();

		const sameSubjectExercises = exercises.filter(e =>
			subjectTitle ? e.question.subject === subjectTitle : true
		);
		const filteredTopics = [...new Set(sameSubjectExercises.map(e => e.question.topic))];

		setFilteredTopics(filteredTopics);
		setSubjectTitle(subjectTitle);
	}, [filteredExercises]);

	const renderCards = () =>
		filteredExercises.map((exercise) => {
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
				<SubjectTitle>{subjectTitle || 'Geral'}</SubjectTitle>

				<FilterContainer>
					<StyledAutocomplete
						className="topic-filter"
						options={filteredTopics}
						onChange={(_, value) => setSelectedTopic(value)}
						renderInput={(params) => (
							<TextField {...params} label="Pesquise por tema..." variant="outlined" />
						)}
					/>
					<StyledAutocomplete
						className="year-filter"
						options={contextYears}
						getOptionLabel={(o) => o.toString()}
						onChange={(_, value) => setSelectedYear(value)}
						renderInput={(params) => <TextField {...params} label="Ano" variant="outlined" />}
					/>
				</FilterContainer>
			</Header>

			{renderCards()}
		</ExercisesContainer>
	);
};

export default Exercises;
