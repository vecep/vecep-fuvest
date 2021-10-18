import React from 'react';
import PropTypes from 'prop-types';
import { mhchemParser } from 'mhchemparser';
import { StyledLatex } from './styles';
import Latex from 'react-latex-next';

const Latext = ({ label, answerColor, children, ...props }) => {
	return (
		<StyledLatex
			answerColor={answerColor}
			label={label}
		>
			<Latex
				{...props}
			>
				{mhchemParser.toTex(children, 'tex')}
			</Latex>
		</StyledLatex>
	);
};

Latext.propTypes = {
	label: PropTypes.bool,
	answerColor: PropTypes.string,
	children: PropTypes.string.isRequired,
	props: PropTypes.any
};

export default Latext;
