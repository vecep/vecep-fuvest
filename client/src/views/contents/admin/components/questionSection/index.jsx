import React, { useState, useEffect } from 'react';
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

const QuestionSection = ({ setQuestion, showMessage }) => {
	const [text, setText] = useState();
	const [subject, setSubject] = useState();
	const [topic, setTopic] = useState();

	useEffect(() => {
		setQuestion({ text, subject, topic });
	}, [text, subject, topic]);

	return (
		<div>
			<FormHeader title="Questão" />
			<FormColumn>
				<FormRow>
					<Autocomplete
						options={AVAILABLE_SUBJECTS}
						onChange={(_, value) => setSubject(value)}
						label="Matéria"
						value={subject || null}
						disableClearable
						required
						error={showMessage && !subject}
						helperText={(showMessage && !subject) ? 'Preencha o campo.' : ''}
					/>
					<TextField
						required
						label="Tema"
						value={topic || ''}
						onChange={e => setTopic(e.target.value)}
						error={showMessage && !topic}
						helperText={(showMessage && !topic) && 'Preencha o campo.'}
					/>
				</FormRow>
				<TextField
					required
					multiline
					maxRows={5}
					label="Texto"
					value={text || ''}
					onChange={e => setText(e.target.value)}
					error={showMessage && !text}
					helperText={(showMessage && !text) && 'Preencha o campo.'}
				/>
			</FormColumn>
		</div>
	);
};

QuestionSection.propTypes = {
	setQuestion: PropTypes.func.isRequired,
	showMessage: PropTypes.bool.isRequired
};

export default QuestionSection;
