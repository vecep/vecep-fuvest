import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import './Card.css';

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

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleAnswer = () => {
        const correctAnswer = options.find(o => o.correct_answer === true);

        const message = selectedValue === correctAnswer.id.toString() ? 'acertou' : 'errou';
        window.alert(message);
    }

    const renderOptions = () => (
        options.map(q => 
            <div className="options-container" key={q.id}>
                <OptionRadio
                    checked={selectedValue === q.id.toString()}
                    onChange={handleChange}
                    value={q.id}
                />
                <span className="question">{q.text}</span>
            </div>
        )
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
            )
        })
    );

    return (
        <div className="question-container">
            <span>{test.year}</span>
            <div className="card-container">
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
                    <button className="answer" onClick={handleAnswer}>Responder</button>
                </div>
            </div>
        </div>
    )
};

export default Card;
