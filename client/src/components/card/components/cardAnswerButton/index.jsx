import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerButton from './styles';
import Popup from 'components/utils/popup';
import * as userApi from 'apis/user';

const CardAnswerButton = ({ selectedAnswer, setAnswered, answered, readOnly }) => {
	const [openPopup, setOpenPopup] = useState(false);

	const handleAnswer = () => {
		if (selectedAnswer) {
			setAnswered(true);
			userApi.answer(selectedAnswer);
		} else {
			setOpenPopup(true);
		}
	};

	const renderPopup = () => (
		<Popup
			open={openPopup}
			handleClose={() => setOpenPopup(false)}
			message="Selecione uma alternativa."
			severity="error"
		/>
	);

	return (
		<>
			{renderPopup()}
			<AnswerButton onClick={handleAnswer} disabled={answered || readOnly}>
				Responder
			</AnswerButton>
		</>
	);
};

CardAnswerButton.propTypes = {
	selectedAnswer: PropTypes.number,
	setAnswered: PropTypes.func.isRequired,
	answered: PropTypes.bool.isRequired,
	readOnly: PropTypes.bool
};

export default CardAnswerButton;
