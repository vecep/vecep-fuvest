import React from 'react';
import PropTypes from 'prop-types';
import { mhchemParser } from 'mhchemparser';
import { StyledTeX } from './styles';

const Latext = ({ label, answerColor, children, ...props }) => {
	return (
		<StyledTeX
			math={mhchemParser.toTex(children, 'tex')}
			answercolor={answerColor}
			label={label}
			{...props}
		/>
	);
};

Latext.propTypes = {
	label: PropTypes.bool,
	answerColor: PropTypes.string,
	children: PropTypes.string.isRequired,
	props: PropTypes.any
};

export default Latext;
