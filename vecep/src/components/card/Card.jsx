/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import CardContainer from './style';

const OptionRadio = withStyles({
	root: {
		color: 'black',
		padding: 0,
        
		'&$checked': {
			color: '#48A7FF',
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />);

const Card = ({ question, options, references, test }) => {
	const [selectedValue, setSelectedValue] = useState();
	const [answered, setAnswered] = useState(false);
	const correctAnswer = options.find(o => o.correct_answer === true);

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const handleAnswers = () => setAnswered(true);

	const renderOptions = () => (
		options.map(q => {
			const isWrong = selectedValue != correctAnswer.id.toString() && selectedValue === q.id.toString() && 'wrong';
			const showAnswer = q.id === correctAnswer.id ? 'correct' : isWrong;

			return(
				<div className="options-container" key={q.id}>
					<OptionRadio
						checked={selectedValue === q.id.toString()}
						onChange={handleChange}
						value={q.id}
						disabled={answered}
					/>
					<span className={answered && showAnswer}>{q.text}</span>
				</div>
			);
		})
	);

	const renderReferences = () => (
		references.map(r => {
			const renderImage = r.image_path && <img src={r.image_path} alt="" />;
			const renderText = r.text && <span>{r.text}</span>;
			const renderSource = r.source && <span className="source">{r.source}</span>;
			const renderAuthor = r.author && <span className="author">{r.author}</span>;

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
			<div className="card-header">
				<div className="card-content">
					<div className="question-text">
						<p className="question-instruction">{question.text}</p>              
						{renderOptions()}
					</div>
					<div className="question-ref">
						{renderReferences()}
					</div>
				</div>
			</div>
			<div className="card-footer">
				<button className="answer" onClick={handleAnswers} disabled={answered}>Responder</button>
			</div>
		</CardContainer>
	);
};

export default Card;
