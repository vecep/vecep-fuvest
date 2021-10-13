import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { get } from 'lodash';

const QuestionContainer = styled.div`
	overflow-wrap: break-word;
	height: 100%;
	margin-right: 35px;
	width: fit-content;
`;

const Text = styled.p`
	font-size: 0.5em;
	margin-bottom: 50px;
`;

const OptionsContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
	margin-bottom: 15px;

	svg {
		width: 1.1rem;
		height: 1.1rem;
	}
`;

const Option = withStyles({
	root: {
		color: 'black',
		padding: 0,
		marginRight: 7,
		transition: 'color .5s',

		'&$checked': {
			color: '#48A7FF'
		}
	},
	checked: {}
})(Radio);

const Label = styled.span`
	font-size: 1rem;
	margin-left: 10px;
	color: ${(props) => props.answerColor};
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto auto auto auto;
	grid-auto-flow: ${({ displayImageGrid }) => displayImageGrid ? 'row' : 'column'};
`;

const ImageLabel = styled.div`
	width: 75%;
 	height: auto;
	box-shadow: 0 0 15px 0 ${(props) => get(props, 'answerColor', 'transparent')};
`;

export { QuestionContainer, Text, OptionsContainer, Option, Label, Grid, ImageLabel };
