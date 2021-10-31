import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, StyledDivider, Span } from './styles';
import getColorRange from '../../../../../utils/getColorRange';

const SubjectRate = ({ title, rate }) => {

	return (
		<Container>
			<Title>{title}</Title>
			<StyledDivider />
			<Span color={getColorRange(rate)}>{rate}%</Span>
		</Container>
	);
};

SubjectRate.propTypes = {
	title: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired
};

export default SubjectRate;
