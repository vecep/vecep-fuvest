import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const TestsContainer = styled.div`
	a {
		text-decoration: none;
		color: black;
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;

	.filter {
		width: 100%;
	}
`;

const Sort = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 15px;

	.button {
		width: 25px;
		height: 25px;
	}
`;

const Row = styled.div`
	margin: 25px 0 25px 0;
`;

const Label = styled.span`
	font-size: 1.7rem;
	margin-right: 8vw;
	vertical-align: middle;
`;

const SortButton = withStyles({
	root: {
		width: 25,
		height: 25,

		color: (props) => props.selected && '#48A7FF'
	}
})(IconButton);

const ViewButton = withStyles({
	root: {
		background: '#F3F3F3',
		borderRadius: 5,
		color: '#707070',
		width: 205,
		fontWeight: 'bold',
		margin: '0 20px',

		'&:hover': {
			background: '#ECECEC'
		},

		'& span, a': {
			width: '100%',
			lineHeight: 2,
			color: '#707070',
			fontSize: '1rem'
		}
	},
	label: {
		textTransform: 'capitalize'
	}
})(Button);

const SimulationButton = withStyles({
	root: {
		background: '#48A7FF',
		borderRadius: 5,
		color: '#ECECEC',
		width: 205,
		fontWeight: 'bold',

		'&:hover': {
			background: '#488eff'
		},

		'& span, a': {
			width: '100%',
			lineHeight: 2,
			color: '#ECECEC',
			fontSize: '1rem'
		}
	},
	label: {
		textTransform: 'capitalize'
	}
})(Button);

export { TestsContainer, Filter, Sort, Row, Label, SortButton, ViewButton, SimulationButton };
