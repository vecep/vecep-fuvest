import React from 'react';
import PropTypes from 'prop-types';
import AnswerButton from './styles';

const CardAnswerButton = ({ selectedAnswer, setAnswered, answered }) => {
	const handleAnswers = () => {
		if (selectedAnswer) {
			setAnswered(true);
		} else {
			window.alert('Selecione uma alternativa.');
		}
	};

	return (
		<AnswerButton onClick={handleAnswers} disabled={answered}>
			Responder
		</AnswerButton>
	);
};

CardAnswerButton.propTypes = {
	selectedAnswer: PropTypes.func,
	setAnswered: PropTypes.func.isRequired,
	answered: PropTypes.bool.isRequired
};

export default CardAnswerButton;
