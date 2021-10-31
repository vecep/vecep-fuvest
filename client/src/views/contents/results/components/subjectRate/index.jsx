import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, StyledDivider, Span } from './styles';
import getColorRange from '../../../../../utils/getColorRange';

const SubjectRate = ({ title, rate, total, correct, absolute }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<StyledDivider />
			{absolute ? (
				<Span color={getColorRange(rate)}>
					{correct}/{total}
				</Span>
			) : (
				<Span color={getColorRange(rate)}>{rate}%</Span>
			)}
		</Container>
	);
};

SubjectRate.propTypes = {
	title: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired,
	total: PropTypes.number,
	correct: PropTypes.number,
	absolute: PropTypes.bool
};

export default SubjectRate;
