import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledButton, StyledProgress } from './styles';

const Button = ({ loading, children, ...props }) =>
	<Container>
		<StyledButton {...props} disabled={loading}>
			{children}
		</StyledButton>

		{loading &&
			<StyledProgress
				size={24}
			/>
		}
	</Container>
;

Button.propTypes = {
	loading: PropTypes.bool,
	children: PropTypes.any,
	props: PropTypes.any
};

export default Button;
