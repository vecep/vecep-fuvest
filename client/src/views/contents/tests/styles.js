import { withStyles } from '@material-ui/core/styles';
import Button from 'components/utils/button';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const TestsContainer = styled.div`
	a {
		text-decoration: none;
		color: #ECECEC;
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;

	.filter {
		width: 100%;
	}

	& .MuiAutocomplete-inputRoot .MuiAutocomplete-input {
		min-width: fit-content;
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
	display: grid;
	grid-template-columns: auto auto auto;
	gap: 1rem;
	margin: 25px 0;
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
		color: '#707070',
		width: 205,
		fontWeight: 'bold',

		'&:hover': {
			background: '#ECECEC'
		},

		'& span, a': {
			width: '100%',
			lineHeight: 2,
			color: '#707070',
			fontSize: '1rem'
		}
	}
})(Button);

const PracticeButton = withStyles({
	root: {
		width: 205,
		fontWeight: 'bold',

		'& span, a': {
			width: '100%',
			lineHeight: 2,
			fontSize: '1rem'
		}
	}
})(Button);

export { TestsContainer, Filter, Sort, Row, Label, SortButton, ViewButton, PracticeButton };
