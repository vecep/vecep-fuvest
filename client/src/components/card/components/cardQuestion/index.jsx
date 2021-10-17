import React from 'react';
import PropTypes from 'prop-types';
import { QuestionContainer, OptionsContainer, Option, Grid, ImageLabel } from './styles';
import CloudImage from '../../../utils/image';
import Latext from '../../../utils/latext';

const CardQuestion = ({ text, options, selectedAnswer, setSelectedAnswer, answered }) => {
	const correctAnswer = options.find((o) => o.correctAnswer === 1);

	const getAnswerColor = (option) => {
		if (answered) {
			if (option.id === correctAnswer.id) {
				return 'green';
			} else if (option.id === selectedAnswer) {
				return 'red';
			}
		}
	};

	const handleChange = (event) => {
		setSelectedAnswer(parseInt(event.target.value));
	};

	const renderOptions = () => {
		const displayImage = options.some((o) => o.image.cloudId != null);

		return (
			<Grid displayImageGrid={displayImage}>
				{options
					.sort((a, b) => !!a.text - !!b.text)
					.map((o) => {
						return (
							<OptionsContainer key={o.id}>
								<Option
									checked={selectedAnswer === o.id}
									onChange={handleChange}
									value={o.id}
									disabled={answered}
								/>
								{o.text && (
									<Latext label answerColor={getAnswerColor(o)}>
										{o.text}
									</Latext>
								)}
								{o.image.cloudId && (
									<ImageLabel answerColor={getAnswerColor(o)}>
										<CloudImage cloudId={o.image.cloudId} alt={o.image.description} />
									</ImageLabel>
								)}
							</OptionsContainer>
						);
					})}
			</Grid>
		);
	};

	return (
		<QuestionContainer>
			<Latext>
				{text}
			</Latext>
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
