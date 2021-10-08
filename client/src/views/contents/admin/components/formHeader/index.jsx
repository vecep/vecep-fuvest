import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';
import { Container, InfoIcon } from './styles';

const FormHeader = ({ title, tooltip }) => (
	<Container>
		<h2>{title}</h2>
		{tooltip && (
			<Tooltip
				title={tooltip}
				arrow
			>
				<InfoIcon />
			</Tooltip>
		)}
	</Container>
);

FormHeader.propTypes = {
	title: PropTypes.string.isRequired,
	tooltip: PropTypes.string
};

export default FormHeader;
