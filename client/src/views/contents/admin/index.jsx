import React, { useState, useContext } from 'react';
import ReferenceSection from './components/referenceSection';
import TestSection from './components/testSection';
import QuestionSection from './components/questionSection';
import OptionSection from './components/optionsSection';
import { isEmpty } from 'lodash';
import Popup from '../../../components/utils/popup';
import { Container, FormRow } from './styles';
import Button from '../../../components/utils/button';
import { AppContext } from '../../../contexts/store';
import Axios from 'axios';

const INITIAL_EXERCISES = {
	test: {
		year: null,
		stage: null
	},
	question: {
		text: null,
		subject: null,
		topic: null
	},
	options: new Array(5).fill({
		text: null,
		correctAnswer: false,
		image: {
			preview: null,
			file: null,
			description: null
		}
	}),
	references: []
};

const Admin = () => {
	const { refreshContext } = useContext(AppContext);

	const [test, setTest] = useState(INITIAL_EXERCISES.test);
	const [question, setQuestion] = useState(INITIAL_EXERCISES.question);
	const [options, setOptions] = useState(INITIAL_EXERCISES.options);
	const [references, setReferences] = useState(INITIAL_EXERCISES.references);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState({
		error: false,
		success: false
	});

	const validate = (exercise) => {
		const { test, question, references, options } = JSON.parse(exercise);

		const isReferencesEmpty = references.some(
			(r) => !r.text && !r.author && !r.source && isEmpty(r.image)
		);
		const isOptionsEmpty =
			options.every((option) => !option.correctAnswer) ||
			options.some((o) => isEmpty(o.image) && !o.text);
		const isDescriptionEmpty =
			references.some((r) => r.image.file && !r.image.description) ||
			options.some((o) => o.image.file && !o.image.description);

		if (
			isEmpty(test) ||
			isEmpty(question) ||
			isOptionsEmpty ||
			isReferencesEmpty ||
			isDescriptionEmpty
		) {
			return false;
		}
		return true;
	};

	const handleClosePopup = () => {
		setMessage({ error: false, success: false });
	};

	const clearForm = () => {
		setQuestion({ ...question, topic: undefined, text: undefined });
		setOptions(INITIAL_EXERCISES.options);
		setReferences(INITIAL_EXERCISES.references);
		setError(false);
	};

	const handleSubmit = async () => {
		try {
			setLoading(true);

			const exercise = JSON.stringify({
				test,
				references,
				question,
				options
			});

			if (validate(exercise)) {
				await Axios.post('http://localhost:3001/api/exercise', exercise, {
					headers: { 'Content-Type': 'application/json' }
				});

				clearForm();
				await refreshContext();
				setMessage({ ...message, success: true });
			} else {
				setMessage({ ...message, error: true });
				setError(true);
			}
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	const renderPopups = () => (
		<>
			<Popup
				open={message.error}
				handleClose={handleClosePopup}
				message="Preencha os campos obrigatórios."
				severity="error"
			/>
			<Popup
				open={message.success}
				handleClose={handleClosePopup}
				message="Exercício enviado com sucesso!"
				severity="success"
				icon={false}
			/>
		</>
	);

	const renderForm = () => (
		<>
			<FormRow large>
				<div>
					<TestSection test={test} setTest={setTest} showMessage={error} />
					<QuestionSection question={question} setQuestion={setQuestion} showMessage={error} />
				</div>
				<OptionSection options={options} setOptions={setOptions} showMessage={error} />
			</FormRow>
			<ReferenceSection references={references} setReferences={setReferences} showMessage={error} />
			<Button onClick={handleSubmit} variant="contained" color="primary" loading={loading}>
				Enviar
			</Button>
		</>
	);

	return (
		<Container>
			{renderPopups()}
			{renderForm()}
		</Container>
	);
};

export default Admin;
