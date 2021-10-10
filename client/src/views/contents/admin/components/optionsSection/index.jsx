import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import ImageSelect from '../imageSelect';
import CircularProgress from '@material-ui/core/CircularProgress';
import { isNil } from 'lodash';
import TextField from '../../../../../components/utils/textField';
import { FormRow, FormColumn } from '../../styles';
import FormHeader from '../formHeader';
import { Label, StyledPagination } from './styles';

const OPTIONS_AMOUNT = 5;

const OptionSection = ({ options, setOptions, showMessage }) => {
	const [page, setPage] = useState(1);

	const handleChange = (value, index) => {
		setOptions([
			...options.map((option, idx) => (idx === index ? { ...option, ...value } : option))
		]);
	};

	const handleChangePage = (_event, value) => {
		setPage(value);
	};

	const renderOptions = () =>
		options.map((option, i) => {
			if (Object.keys(option).length === 0) {
				return <CircularProgress key={i} />;
			}

			const { image } = option;
			const isImageOption = !isNil(image.file);

			if (i === page - 1) {
				return (
					<React.Fragment key={i}>
						{isImageOption ? (
							<FormRow>
								<TextField
									required
									multiline
									rows={4}
									label="Description"
									onChange={(e) =>
										handleChange({ ...option, image: { description: e.target.value } }, i)
									}
									value={image.description || ''}
									error={showMessage && image.file && !image.description}
									helperText={
										showMessage && image.file && !image.description ? 'Preencha o campo.' : ''
									}
								/>
								<img id="image" src={image.preview} width="200px" />
							</FormRow>
						) : (
							<TextField
								required
								multiline
								maxRows={3}
								label="Texto"
								onChange={(e) => handleChange({ text: e.target.value }, i)}
								disabled={isImageOption}
								error={showMessage && !option.text}
								helperText={showMessage && !option.text && 'Preencha o campo.'}
								value={option.text || ''}
							/>
						)}
						<FormRow>
							<ImageSelect
								image={image}
								handleChange={handleChange}
								index={i}
								disabled={!!option.text}
								showMessage={showMessage}
							/>
							<Label
								control={
									<Switch
										onChange={(e) =>
											handleChange({ correctAnswer: e.target.checked }, i)
										}
										disabled={options.some((o) => o.correctAnswer) && !option.correctAnswer}
										checked={option.correctAnswer}
									/>
								}
								label="Resposta correta"
								labelPlacement="end"
							/>
						</FormRow>
					</React.Fragment>
				);
			}
		});

	return (
		<div>
			<FormHeader
				title="Alternativas"
				tooltip="Uma alternativa consiste em um texto OU uma imagem.
					Não é possível inserir os dois ao mesmo tempo."
			/>
			<FormColumn>
				{renderOptions()}
				<StyledPagination count={OPTIONS_AMOUNT} page={page} onChange={handleChangePage} />
			</FormColumn>
		</div>
	);
};

OptionSection.propTypes = {
	options: PropTypes.array.isRequired,
	setOptions: PropTypes.func.isRequired,
	showMessage: PropTypes.bool.isRequired
};

export default OptionSection;
