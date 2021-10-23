import React, { useEffect, useState } from 'react';
import { Container, InfoContainer, Info, Content, Footer } from './styles';
import PropTypes from 'prop-types';
import CardAnswerButton from './components/cardAnswerButton';
import CardReferences from './components/cardReference';
import CardQuestion from './components/cardQuestion';
import UserService from '../../services/user.service';

const Card = ({ question, options, references, test, baseCard, readOnly }) => {
	const [selectedAnswer, setSelectedAnswer] = useState();
	const [answered, setAnswered] = useState(false);

	useEffect(() => {
		let mounted = true;
		(async () => {
			if(!baseCard) {
				const userAnswers = await UserService.getAnswers();
				const [selectedAnswer] = options.filter((o) => userAnswers.includes(o.id));
				const answered = !!selectedAnswer;

				if (mounted) {
					setSelectedAnswer(selectedAnswer?.id);
					setAnswered(answered);
				}
			}
		})();

		return () => {
			mounted = false;
		};
	}, []);

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
					readOnly={readOnly}
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
	baseCard: PropTypes.bool,
	readOnly: PropTypes.bool
};

export default Card;
