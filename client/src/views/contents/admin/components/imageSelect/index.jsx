import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/utils/textField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FormRow } from '../../styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Button from 'components/utils/button';
import { Container } from './styles';

const ImageSelect = ({ image, handleChange, index, disabled, showMessage }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClear = () => {
		handleChange({ image: { preview: undefined, file: undefined, description: undefined } }, index);
	};

	const handleFileInputChange = (e, image, index) => {
		const file = e.target.files[0];
		const preview = URL.createObjectURL(file);

		toBase64(file, (convertedFile) => {
			handleChange({ image: { ...image, preview, file: convertedFile } }, index);
		});
	};

	const toBase64 = (file, callback) => {
		if (!file) return;

		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onloadend = () => {
			callback(reader.result);
		};
		reader.onerror = () => {
			console.error('Ocorreu um erro ao enviar a imagem.');
		};
	};

	const renderDialog = () => (
		<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Upload de imagem</DialogTitle>
			<DialogContent>
				<DialogContentText>Insira uma breve descrição para a imagem carregada.</DialogContentText>
				<DialogContentText>
						A primeira dica na hora de criar a descrição é se perguntar: “se eu não pudesse utilizar
						essa imagem, o que escreveria para representá-la?”
				</DialogContentText>
				<DialogContentText>
						Veja:{' '}
					<a
						href="https://cta.ifrs.edu.br/boas-praticas-para-descricao-de-imagens/"
						target="_blank"
						rel="noopener noreferrer"
					>
							Boas práticas para descrição de imagens
					</a>
				</DialogContentText>
				<FormRow>
					<TextField
						required
						multiline
						label="Description"
						onChange={(e) =>
							handleChange({ image: { ...image, description: e.target.value } }, index)
						}
						disabled={disabled || !image.file}
						value={image.description || ''}
						error={showMessage && image.file && !image.description}
						helperText={
							showMessage && image.file && !image.description ? 'Preencha o campo.' : ''
						}
					/>
					<FormRow>
						<Button component="label" color="primary" disabled={disabled}>
							<AddCircleOutlineIcon />
							<input
								type="file"
								onChange={(e) => handleFileInputChange(e, image, index)}
								hidden
							/>
						</Button>
					</FormRow>
				</FormRow>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
						Ok
				</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<Container>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Enviar imagem
			</Button>
			{renderDialog()}
			{image.file && (
				<IconButton variant="contained" component="label" color="secondary" onClick={handleClear}>
					<DeleteOutlineIcon />
				</IconButton>
			)}
		</Container>
	);
};

ImageSelect.propTypes = {
	image: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	disabled: PropTypes.bool,
	showMessage: PropTypes.bool.isRequired
};

export default ImageSelect;
