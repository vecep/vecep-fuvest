import React from 'react';
import PropTypes from 'prop-types';
import { Container, ValueContainer, Value, Total, Label, StyledDivider } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { isNil } from 'lodash';

const Stats = ({ icon, value, label, total }) => {

	return (
		<Container>
			{!isNil(value) ? (
				<>
					{icon}
					<ValueContainer>
						<Value>{value}</Value>
						{!isNil(total) && (
							<Total>{` / ${total}`}</Total>
						)}
					</ValueContainer>
					<StyledDivider />
					<Label>{label}</Label>
				</>
			) : (
				<CircularProgress />
			)
			}
		</Container>
	);
};

Stats.propTypes = {
	icon: PropTypes.node.isRequired,
	value: PropTypes.number,
	label: PropTypes.string.isRequired,
	total: PropTypes.number
};

export default Stats;
