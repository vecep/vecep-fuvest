import React from 'react';
import PropTypes from 'prop-types';
import ImageSelect from '../imageSelect';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from 'components/utils/textField';
import Button from '@material-ui/core/Button';
import { isNil } from 'lodash';
import { FormRow, FormColumn } from '../../styles';
import ClearIcon from '@material-ui/icons/Clear';
import FormHeader from '../formHeader';
import { Header } from './styles';

const ReferenceSection = ({ references, setReferences, showMessage }) => {
	const handleChange = (value, index) => {
		setReferences([...references.map((reference, idx) =>
			idx === index ?
				{ ...reference, ...value }
				: reference
		)]);
	};

	const handleClear = (index) => {
		const clearedReferences = references.filter((_, i) => i !== index);
		setReferences(clearedReferences);
	};

	const renderReference = () =>
		references.map((reference, i) => {
			const { image } = reference;

			return (
				<div key={i}>
					<Header>
						<span>Referência {i + 1}</span>
						<IconButton
							variant="contained"
							component="label"
							color="secondary"
							size="small"
							onClick={() => handleClear(i)}
						>
							<ClearIcon />
						</IconButton>
					</Header>
					<FormColumn>
						<TextField
							multiline
							maxRows={5}
							label="Texto"
							onChange={e => handleChange({ text: e.target.value }, i)}
							value={reference.text || ''}
							latex
						/>
						<FormRow>
							<TextField
								label="Autor"
								onChange={e => handleChange({ author: e.target.value }, i)}
								value={reference.author || ''}
							/>
							<TextField
								label="Fonte"
								onChange={e => handleChange({ source: e.target.value }, i)}
								value={reference.source || ''}
							/>
						</FormRow>
						{!isNil(image.file) && <img id="image" src={reference.image.preview} width="200px" />}
						<ImageSelect
							image={reference.image}
							handleChange={handleChange}
							index={i}
							showMessage={showMessage}
						/>
					</FormColumn>
				</div>
			);
		}
		);

	const addReference = () => {
		setReferences(
			[...references, {
				text: null,
				author: null,
				source: null,
				image: {
					preview: undefined,
					file: undefined,
					description: undefined
				}
			}]
		);
	};

	return (
		<div>
			<FormHeader title="Referências" />
			<FormColumn>
				{references.length > 0 && renderReference()}
				<Button onClick={addReference} startIcon={<AddIcon />} />
			</FormColumn>
		</div>
	);
};

ReferenceSection.propTypes = {
	references:PropTypes.array.isRequired,
	setReferences: PropTypes.func.isRequired,
	showMessage: PropTypes.bool.isRequired
};

export default ReferenceSection;
