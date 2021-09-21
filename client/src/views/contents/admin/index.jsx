import React, { useState } from 'react';
import Axios from 'axios';

const Admin = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [previewSource, setPreviewSource] = useState();

	const handleFileInputChange = e => {
		const file = e.target.files[0];
		setSelectedFile(file);
		setPreviewSource(URL.createObjectURL(file));
	};

	const handleSubmitFile = () => {
		if (!selectedFile) return;

		const reader = new FileReader();

		reader.readAsDataURL(selectedFile);
		reader.onloadend = () => {
			uploadImage(reader.result);
		};
		reader.onerror = () => {
			console.error('Ocorreu um erro ao enviar a imagem.');
		};
	};

	const uploadImage = async (base64EncodedImage) => {
		try {
			const config = {
				headers: { 'Content-Type': 'application/json' }
			};

			const body = JSON.stringify({
				description: 'Eu gosto de batata!',
				image: base64EncodedImage
			});

			await Axios.post('http://localhost:3001/api/image', body, config);
			setPreviewSource('');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<input
				type="file"
				onChange={e => handleFileInputChange(e)}
			/>
			<br/>
			<img id="image" src={previewSource} width="200px" />
			<br/>
			<button type="submit" onClick={handleSubmitFile}>Upload</button>
		</div>
	);
};

export default Admin;
