import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox } from './styles';

const Button = ({ ...props }) => (
	<StyledCheckbox {...props} />
);

Button.propTypes = {
	props: PropTypes.any
};

export default Button;
