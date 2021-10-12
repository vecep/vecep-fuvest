import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  width: fit-content;
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

const StyledProgress = withStyles({
	root: {
		position: 'absolute',
		left: '50%',
		marginLeft: '-12px',
		color: '#48A7FF'
	}
})(CircularProgress);

export { Container, StyledButton, StyledProgress };
