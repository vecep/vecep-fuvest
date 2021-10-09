import React from 'react';
import PropTypes from 'prop-types';
import { QuestionContainer, Text, OptionsContainer, Option, Label } from './styles';

const CardQuestion = ({ text, options, selectedAnswer, setSelectedAnswer, answered }) => {
	const correctAnswer = options.find((o) => o.correctAnswer === 1);

	const answerColor = (option) => {
		if (option.id === correctAnswer.id) {
			return 'green';
		} else if (option.id === selectedAnswer) {
			return 'red';
		} else {
			return 'black';
		}
	};

	const handleChange = (event) => {
		setSelectedAnswer(parseInt(event.target.value));
	};

	const renderOptions = () =>
		options.map((o) => (
			<OptionsContainer key={o.id}>
				<Option
					checked={selectedAnswer === o.id}
					onChange={handleChange}
					value={o.id}
					disabled={answered}
				/>
				<Label answerColor={answered && answerColor(o)}>{o.text}</Label>
			</OptionsContainer>
		));

	return (
		<QuestionContainer>
			<Text>{text}</Text>
			{renderOptions()}
		</QuestionContainer>
	);
};

CardQuestion.propTypes = {
	text: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedAnswer: PropTypes.number,
	setSelectedAnswer: PropTypes.func.isRequired,
	answered: PropTypes.bool.isRequired,
	showAnswer: PropTypes.func
};

export default CardQuestion;
