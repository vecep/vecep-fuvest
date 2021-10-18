import React, { useState } from 'react';
import { Container, InfoContainer, Info, Content, Footer } from './styles';
import PropTypes from 'prop-types';
import CardAnswerButton from './components/cardAnswerButton';
import CardReferences from './components/cardReference';
import CardQuestion from './components/cardQuestion';

const Card = ({ question, options, references, test, readOnly }) => {
	const [selectedAnswer, setSelectedAnswer] = useState();
	const [answered, setAnswered] = useState(false);

	return (
		<Container>
			<InfoContainer>
				<Info>
					{question.subject} - {question.topic}
				</Info>
				<Info bold>{test.year}</Info>
			</InfoContainer>

			<Content>
				<CardQuestion
					text={question.text}
					options={options}
					selectedAnswer={selectedAnswer}
					setSelectedAnswer={setSelectedAnswer}
					answered={answered}
				/>

				<CardReferences references={references} />
			</Content>

			<Footer>
				<CardAnswerButton
					selectedAnswer={selectedAnswer}
					setAnswered={setAnswered}
					answered={answered}
					readOnly={readOnly}
				/>
			</Footer>
		</Container>
	);
};

Card.propTypes = {
	question: PropTypes.object.isRequired,
	options: PropTypes.array.isRequired,
	references: PropTypes.array,
	test: PropTypes.object.isRequired,
	readOnly: PropTypes.bool
};

export default Card;
