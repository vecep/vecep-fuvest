import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../../../../components/utils/textField';
import Autocomplete from '../../../../../components/utils/autocomplete';
import { FormRow, FormColumn } from '../../styles';
import FormHeader from '../formHeader';

const AVAILABLE_SUBJECTS = [
	'Matemática', 'Química', 'Língua Portuguesa',
	'Inglês', 'Biologia', 'Geografia',
	'História', 'Física', 'Conhecimentos Gerais'
].sort();

const QuestionSection = ({ question, setQuestion, showMessage }) => {
	return (
		<div>
			<FormHeader title="Questão" />
			<FormColumn>
				<FormRow>
					<Autocomplete
						options={AVAILABLE_SUBJECTS}
						onChange={(_, value) => setQuestion({ ...question, subject: value })}
						label="Matéria"
						value={question.subject || null}
						disableClearable
						required
						error={showMessage && !question.subject}
						helperText={(showMessage && !question.subject) ? 'Preencha o campo.' : ''}
					/>
					<TextField
						required
						label="Tema"
						value={question.topic || ''}
						onChange={e => setQuestion({ ...question, topic: e.target.value })}
						error={showMessage && !question.topic}
						helperText={(showMessage && !question.topic) && 'Preencha o campo.'}
					/>
				</FormRow>
				<TextField
					required
					multiline
					maxRows={5}
					label="Texto"
					value={question.text || ''}
					onChange={e => setQuestion({ ...question, text: e.target.value })}
					error={showMessage && !question.text}
					helperText={(showMessage && !question.text) && 'Preencha o campo.'}
				/>
			</FormColumn>
		</div>
	);
};

QuestionSection.propTypes = {
	question: PropTypes.object.isRequired,
	setQuestion: PropTypes.func.isRequired,
	showMessage: PropTypes.bool.isRequired
};

export default QuestionSection;
