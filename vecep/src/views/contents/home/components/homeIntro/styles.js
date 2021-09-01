import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding-top: 70px;
	padding-bottom: 50px;
`;

const Intro = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Text = styled.div`
	font-size: 1.5em;

	@media only screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const Title = styled.span`
	display: block;
	font-size: 1.2em;
	margin-block-end: 0.83em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	font-weight: bold;
`;

const Image = styled.img`
	transform: scaleX(-1);
	height: 300px;
	margin-left: 70px;

	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #21CBF3 30%, #48A7FF 90%)',
		borderRadius: 2,
		color: 'white',
		width: 205,
		padding: 0,
		boxSizing: 'border-box',
		boxShadow: '0 3px 5px 2px rgba(27, 68, 105, .3)',
		fontWeight: 'bold',

		'&:hover': {
			background: 'linear-gradient(45deg, #21f39f 30%, #21CBF3 90%)'
		},

		'& span, a': {
			width: '100%',
			lineHeight: 2.5,
			fontSize: '1rem',

			'&:hover': {
				color: '#282727'
			}
		}
	},
	label: {
		textTransform: 'capitalize'
	}
})(Button);

export { Container, Intro, Text, Title, Image, StyledButton };
