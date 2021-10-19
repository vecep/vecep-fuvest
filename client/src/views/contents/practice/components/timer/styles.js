import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Button, CardContent } from '@material-ui/core';
import { Collapse } from '@material-ui/core';

const CardContainer = withStyles({
	root: {
		position: 'fixed',
		zIndex: '1',
		cursor: 'move',
		width: '215px',
		bottom: '25px',
		left: '25px',
		fontFamily: 'Trebuchet MS',
		pointerEvents: 'all',

		'& > *': {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			boxSizing: 'border-box'
		},

		'& .MuiCardContent-root:last-child': {
			padding: 0
		}
	}
})(Card);

const Header = withStyles({
	root: {
		padding: 0
	}
})(CardContent);

const ActionContainer = styled.div`
	display: flex;
	width: 100%;
`;

const StartButton = withStyles({
	root: {
		width: '100%',
		background: '#83FFA5',
		color: 'white',
		fontWeight: 'bold',

		'&:hover': {
			background: '#6BE8B0'
		}
	}
})(Button);

const StopButton = withStyles({
	root: {
		width: '100%',
		background: '#282727',
		color: 'white',
		fontWeight: 'bold',

		'&:hover': {
			background: '#282727'
		}
	}
})(Button);

const ContinueButton = withStyles({
	root: {
		width: '100%',
		background: '#48a7ff',
		color: 'white',
		fontWeight: 'bold',

		'&:hover': {
			background: '#48a7ff'
		}
	}
})(Button);

const CollapsedContent = withStyles({
	root: {
		display: 'block',

		'& .MuiCardContent-root': {
			display: 'flex',
			justifyContent: 'center'
		}
	}
})(Collapse);

export {
	CardContainer,
	Header,
	ActionContainer,
	StartButton,
	StopButton,
	ContinueButton,
	CollapsedContent
};
