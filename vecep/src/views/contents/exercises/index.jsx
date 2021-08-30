import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../../components/card';
import TextField from '@material-ui/core/TextField';
import { ExercisesContainer, StyledAutocomplete } from './style';
import { normalizeWord } from '../../../utils/normalizeWord';

import alternativas from '../../../Mock/alternativas.json';
import exercicios from '../../../Mock/exercicios.json';
import referencias from '../../../Mock/referencias.json';
import referencias_exercicios from '../../../Mock/referencias-exercicios.json';
import provas from '../../../Mock/provas.json';

const Exercises = () => {
	const location = useLocation();

	const [selectedYear, setSelectedYear] = useState();
	const [selectedTopic, setSelectedTopic] = useState();

	const filter = location.pathname.split('/').pop();

	const filteredQuestions = exercicios.filter(({subject, topic, test_id }) => {
		const { year: questionTestYear } = provas.find(({id}) => id === test_id);

		const filterBySubject = filter === normalizeWord(subject) || filter === 'exercicios';
		const filterByTopic = selectedTopic ? topic.toLowerCase() === selectedTopic.toLowerCase() : true;
		const filterByYear = selectedYear ? questionTestYear === selectedYear : true;

		return filterBySubject && filterByTopic && filterByYear;
	});

	const distinctSubjects = [... new Set(filteredQuestions.map(fq => fq.subject))];
	const distinctTopics = [...new Set(exercicios.map(e => e.topic))];
	const distinctYears = [...new Set(provas.map(t => t.year))];

	const subjectTitle = distinctSubjects.some(c => c !== distinctSubjects[0]) ? 'Geral' : distinctSubjects.shift();

	const renderCards = () => (
		filteredQuestions.map(question => {
			const test = provas.find(p => p.id === question.test_id);
			const question_references = referencias_exercicios.filter(qr => qr.question_id === question.id);
			const references = question_references.map(qr => referencias.find(r => r.id === qr.reference_id));
			const options = alternativas.filter(a => a.question_id === question.id);

			return <Card question={question} options={options} references={references} key={question.id} test={test} />;
		})
	);

	return (
		<ExercisesContainer>
			<div className="filter-container">
				<span>{subjectTitle}</span>
				<div className="filters">
					<StyledAutocomplete
						className="topic-filter"
						options={distinctTopics}
						onChange={(_, value) => setSelectedTopic(value)}
						renderInput={params => <TextField {...params} label="Pesquise por tema..." variant="outlined" />}
					/>
					<StyledAutocomplete
						className="year-filter"
						options={distinctYears}
						getOptionLabel={o => o.toString()}
						onChange={(_, value) => setSelectedYear(value)}
						renderInput={params => <TextField {...params} label="Ano" variant="outlined" />}
					/>
				</div>
			</div>

			{renderCards()}
		</ExercisesContainer>
	);
};

export default Exercises;
