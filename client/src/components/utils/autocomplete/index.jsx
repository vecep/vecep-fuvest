import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { StyledAutocomplete } from './style';

const Autocomplete = ({ options, onChange, label, required, error, helperText, ...otherProps }) =>
	<StyledAutocomplete
		options={options}
		onChange={onChange}
		renderInput={(params) => (
			<TextField
				{...params}
				label={label}
				variant="outlined"
				error={error}
				helperText={helperText}
				required={required}
			/>
		)}
		{...otherProps}
	/>
;

Autocomplete.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	required: PropTypes.bool,
	error: PropTypes.bool,
	helperText: PropTypes.string,
	otherProps: PropTypes.any
};

export default Autocomplete;
