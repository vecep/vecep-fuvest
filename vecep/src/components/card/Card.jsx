import React, { useState } from 'react';
import './Card.css';
import fallen from '../../images/fallen.jpg'
import Modal from '@material-ui/core/Modal';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Card = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
            setOpen(false);
    };
    

    const mockedQuestions = ["necessidade de leis de proteção para todos que trabalham.", 
    "existência de desigualdade entre homens e mulheres no mercado de trabalho.",
    "permanência de preconceito racial na contratação de mulheres para determinadas profissões.",
    "importância de campanhas dirigidas para a mulher trabalhadora.",
    "discriminação de gênero que se manifesta na própria linguagem."]

    const renderRadio = () => (
        mockedQuestions.map(q => 
                <>
                <input className="radio" type="radio" id={mockedQuestions.indexOf(q)} name="fav_language" value="HTML" />
                <label className="question" for={mockedQuestions.indexOf(q)}>{q}</label><br />
                </>
        )
    );

    return (
        <div className="question-container">
        <span>2019</span>
        <div className="card">
            <div className="question-text">
                <p className="question-instruction-basic">Examine o anúncio.</p>
                <p className="question-instruction-text">No contexto do anúncio, a frase “A diferença tem que ser só uma letra” pressupõe a</p>
                {renderRadio()}
            </div>
            <div className="question-image">
                <img src={fallen} alt="" onClick={handleOpen} className={classes.paper}/>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div className="batatinha">
                        <img src={fallen} alt=""/>
                    </div>
                </Modal>
                <span>Ministério Público do Trabalho no Rio Grande do Sul</span>
            </div>
        </div>
        </div>
    )
};
export default Card;