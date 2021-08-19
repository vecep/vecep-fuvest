import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import question_image from '../../images/question_image.png'
import './Card.css';

const mockedQuestions = ["necessidade de leis de proteção para todos que trabalham.", 
    "existência de desigualdade entre homens e mulheres no mercado de trabalho.",
    "permanência de preconceito racial na contratação de mulheres para determinadas profissões.",
    "importância de campanhas dirigidas para a mulher trabalhadora.",
    "discriminação de gênero que se manifesta na própria linguagem."]

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

const Card = () => {
    const [selectedValue, setSelectedValue] = useState();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const renderOptions = () => (
        mockedQuestions.map(q => 
            <div className="options-container">
                <OptionRadio
                    checked={selectedValue === q}
                    onChange={handleChange}
                    value={q}
                />
                <span className="question">{q}</span>
            </div>
        )
    );

    return (
        <div className="question-container">
            <span>2019</span>
            <div className="card-container">
                <div className="card-header">
                    <div className="card-content">
                        <div className="question-text">
                            <p className="question-instruction-basic">Examine o anúncio.</p>
                            <p className="question-instruction-text">No contexto do anúncio, a frase “A diferença tem que ser só uma letra” pressupõe a</p>
                            
                            {renderOptions()}
                        </div>
                        <div className="question-ref">
                            <img src={question_image} alt="" />
                            <span>Ministério Público do Trabalho no Rio Grande do Sul</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="answer">Responder</button>
                </div>
            </div>
        </div>
    )
};

export default Card;
