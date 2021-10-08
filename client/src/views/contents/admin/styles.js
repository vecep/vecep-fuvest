import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const Container = styled.div`
	width: 70%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${props => props.large ? '3em' : '1em'};
`;

const FormColumn = styled.div`
  display: grid;
  gap: 1em;
`;

const StyledButton = withStyles({
	contained: {
		background: '#48A7FF',

		'&:hover': {
			background: '#48A7FF',
			filter: 'brightness(1.2)'
		}
	},
	textPrimary: {
		color: '#48A7FF'
	},
	outlined: {
		color: '#48A7FF',
		borderColor: '#48A7FF',

		'&:hover': {
			borderColor: '#48A7FF',
			filter: 'brightness(1.2)'
		}
	}
})(Button);

export { Container, FormRow, FormColumn, StyledButton };
