import React from 'react';
import { StyledTextField } from './style';

const TextField = (props) =>
	<StyledTextField
		{...props}
		variant="outlined"
	/>
;

export default TextField;
