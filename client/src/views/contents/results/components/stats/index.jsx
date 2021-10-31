import React from 'react';
import PropTypes from 'prop-types';
import { Container, Value, Label, StyledDivider } from './styles';

const Stats = ({ icon, value, label }) => {

	return (
		<Container>
			{icon}
			<Value>{value}/100</Value>
			<StyledDivider />
			<Label>{label}</Label>
		</Container>
	);
};

Stats.propTypes = {
	icon: PropTypes.node.isRequired,
	value: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired
};

export default Stats;
