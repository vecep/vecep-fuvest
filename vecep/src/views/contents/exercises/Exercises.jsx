import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../../components/card/Card';
import alternativas from '../../../Mock/alternativas.json';
import exercicios from '../../../Mock/exercicios.json';
import referencias from '../../../Mock/referencias.json';
import referencias_exercicios from '../../../Mock/referencias-exercicios.json';
import provas from '../../../Mock/provas.json';
import ExercisesContainer from './style';
import { normalizeWord } from '../../../utils/normalizeWord';

const Exercises = () => {
	const location = useLocation();

	const [filter] = location.pathname.match(/[^/ ]\w+$/g);

	const generateCards = () => (
		exercicios.map(question => {
			const test = provas.find(p => p.id === question.test_id);
			const question_references = referencias_exercicios.filter(qr => qr.question_id === question.id);
			const references = question_references.map(qr => referencias.find(r => r.id === qr.reference_id));
			const options = alternativas.filter(a => a.question_id === question.id);

			const [question_subject] = normalizeWord(question.subject).match(/[^/ ]\w+$/g);
		
			if (question_subject === filter) {
				return <Card question={question} options={options} references={references} key={question.id} test={test} />;
			}
		}));

	return (
		<ExercisesContainer>
			{console.log('Filtro: ' + filter)}
			{generateCards()}
		</ExercisesContainer>
	);
};
export default Exercises;
