import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const TestsContainer = styled.div`
& > div > span {
    font-size: 1.7rem;
    margin-right: 8vw;
    vertical-align: middle;
}
.row {
    margin-bottom: 20px;
}
a{
    text-decoration: none;
    color: black;
}
`;

const ViewButton = withStyles({
	root: {
		background: '#F3F3F3',
		borderRadius: 5,
		color: '#707070',
		width: 205,
		fontWeight: 'bold',
		margin: '0 20px',

		'&:hover': {
			background: '#ECECEC',
		},

		'& span, a': {
			width: '100%',
			lineHeight: 2.3,
			color: '#707070',
			fontSize: '1rem',
		},
	},
	label: {
		textTransform: 'capitalize',
	},
})(Button);

const SimulationButton = withStyles({
	root: {
		background: '#48A7FF',
		borderRadius: 5,
		color: '#ECECEC',
		width: 205,
		fontWeight: 'bold',

		'&:hover': {
			background: '#488eff',
		},

		'& span, a': {
			width: '100%',
			lineHeight: 2.3,
			color: '#ECECEC',
			fontSize: '1rem',
		},
	},
	label: {
		textTransform: 'capitalize',
	},
})(Button);

export { TestsContainer, ViewButton, SimulationButton };
