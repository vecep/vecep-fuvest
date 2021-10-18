import React from 'react';
import PropTypes from 'prop-types';
import AnswerButton from './styles';

const CardAnswerButton = ({ selectedAnswer, setAnswered, answered, readOnly }) => {
	const handleAnswers = () => {
		if (selectedAnswer) {
			setAnswered(true);
		} else {
			window.alert('Selecione uma alternativa.');
		}
	};

	return (
		<AnswerButton onClick={handleAnswers} disabled={answered || readOnly}>
			Responder
		</AnswerButton>
	);
};

CardAnswerButton.propTypes = {
	selectedAnswer: PropTypes.number,
	setAnswered: PropTypes.func.isRequired,
	answered: PropTypes.bool.isRequired,
	readOnly: PropTypes.bool
};

export default CardAnswerButton;
