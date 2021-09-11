import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../../components/card';
import TextField from '@material-ui/core/TextField';
import { ExercisesContainer, Header, FilterContainer, SubjectTitle } from './styles';
import { StyledAutocomplete } from '../../../components/utils/autocomplete/style';
import { normalizeWord } from '../../../utils/normalizeWord';
import Axios from 'axios';

const Exercises = () => {
	const location = useLocation();

	const [exercises, setExercises] = useState([]);
	const [selectedYear, setSelectedYear] = useState();
	const [selectedTopic, setSelectedTopic] = useState();
	const [years, setYears] = useState([]);
	const [filter, setFilter] = useState();

	useEffect(async () => {
		const { data: exercises } = await Axios.get('http://localhost:3001/api/exercises');
		const { data: tests } = await Axios.get('http://localhost:3001/api/tests');

		const distinctYears = [...new Set(tests.map(t => t.year))];

		setExercises(exercises);
		setYears(distinctYears);
	}, []);

	useEffect(() => {
		const filter = location.pathname.split('/').pop();
		setFilter(filter);
	}, [location]);

	const filteredExercises = exercises.filter(exercise => {
		const { test, question } = exercise;

		const filterBySubject = filter === normalizeWord(question.subject) || filter === 'exercicios';
		const filterByTopic = selectedTopic
			? question.topic.toLowerCase() === selectedTopic.toLowerCase()
			: true;
		const filterByYear = selectedYear ? test.year === selectedYear : true;

		return filterBySubject && filterByTopic && filterByYear;
	});

	const distinctSubjects = [...new Set(filteredExercises.map((fe) => fe.question.subject))];
	const distinctTopics = [...new Set(exercises.map((e) => e.question.topic))];

	const subjectTitle = distinctSubjects.some((c) => c !== distinctSubjects[0])
		? 'Geral'
		: distinctSubjects.shift();

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
				<SubjectTitle>{subjectTitle}</SubjectTitle>

				<FilterContainer>
					<StyledAutocomplete
						className="topic-filter"
						options={distinctTopics}
						onChange={(_, value) => setSelectedTopic(value)}
						renderInput={(params) => (
							<TextField {...params} label="Pesquise por tema..." variant="outlined" />
						)}
					/>
					<StyledAutocomplete
						className="year-filter"
						options={years}
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
