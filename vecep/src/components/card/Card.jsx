import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import CardContainer from './style';
import PropTypes from 'prop-types';

const OptionRadio = withStyles({
	root: {
		color: 'black',
		padding: 0,
		transition: 'color .5s',
        
		'&$checked': {
			color: '#48A7FF',
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />);

const Card = ({ question, options, references, test }) => {
	const [selectedAnswer, setSelectedAnswer] = useState();
	const [answered, setAnswered] = useState(false);

	const correctAnswer = options.find(o => o.correct_answer === true);

	const handleChange = (event) => {
		setSelectedAnswer(parseInt(event.target.value));
	};

	const handleAnswers = () => {
		if(selectedAnswer) {
			setAnswered(true);
		} else {
			window.alert('Selecione uma alternativa.');
		}
	};

	const showAnswer = option => {
		if (option.id === correctAnswer.id) {
			return 'correct';
		} else if (option.id === selectedAnswer) {
			return 'wrong';
		}
	};

	const renderOptions = () => (
		options.map(o => (
			<div className="options-container" key={o.id}>
				<OptionRadio
					checked={selectedAnswer === o.id}
					onChange={handleChange}
					value={o.id}
					disabled={answered}
				/>
				<span className={answered ? showAnswer(o) : ''}>{o.text}</span>
			</div>
		))
	);

	const renderReferences = () => (
		references.map(r => {
			const renderImage = r.image_path && <img src={r.image_path} alt="" />;
			const renderText = r.text && <p className="">{r.text}</p>;
			const renderSource = r.source && <span className="source">{r.source}</span>;
			const renderAuthor = r.author && <span>{r.author}</span>;

			return (
				<div className="reference" key={r.id}>
					{renderImage}
					{renderText}
					{renderSource}
					{renderAuthor}
					<hr />
				</div>
			);
		})
	);

	return (
		<CardContainer>
			<div className="card-info">
				<span>{question.subject} - {question.genre}</span>
				<span>{test.year}</span>
			</div>
			<div className="card-body">
				<div className="card-content">
					<div className="question-container">
						<p>{question.text}</p>              
						{renderOptions()}
					</div>
					<div className="reference-container">
						{renderReferences()}
					</div>
				</div>
			</div>
			<div className="card-footer">
				<button className="answer-button" onClick={handleAnswers} disabled={answered}>Responder</button>
			</div>
		</CardContainer>
	);
};

Card.propTypes = {
	question: PropTypes.object.isRequired,
	options: PropTypes.array.isRequired,
	references: PropTypes.array.isRequired,
	test: PropTypes.object.isRequired,
};

export default Card;
