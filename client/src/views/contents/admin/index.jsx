import React, { useState } from 'react';
import ReferenceSection from './components/referenceSection';
import TestSection from './components/testSection';
import QuestionSection from './components/questionSection';
import OptionSection from './components/optionsSection';
import { isEmpty } from 'lodash';
import Popup from '../../../components/utils/popup';
import { Container, FormRow, StyledButton } from './styles';
import Axios from 'axios';

const Admin = () => {
	const [test, setTest] = useState({});
	const [question, setQuestion] = useState({});
	const [options, setOptions] = useState([{}, {}, {}, {}, {}]);
	const [references, setReferences] = useState([]);
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

	const handleSubmit = async () => {
		try {
			const exercise = JSON.stringify({
				test,
				references,
				question,
				options
			});

			if (validate(exercise)) {
				const config = {
					headers: { 'Content-Type': 'application/json' }
				};
				await Axios.post('http://localhost:3001/api/exercise', exercise, config);

				setMessage({ ...message, success: true });
			} else {
				setMessage({ ...message, error: true });
				setError(true);
			}
		} catch (err) {
			console.error(err);
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
					<TestSection setTest={setTest} showMessage={error} />
					<QuestionSection setQuestion={setQuestion} showMessage={error} />
				</div>
				<OptionSection
					options={options}
					setOptions={setOptions}
					showMessage={error}
				/>
			</FormRow>
			<ReferenceSection
				references={references}
				setReferences={setReferences}
				showMessage={error}
			/>
			<StyledButton onClick={handleSubmit} variant="contained" color="primary">
				Enviar
			</StyledButton>
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
