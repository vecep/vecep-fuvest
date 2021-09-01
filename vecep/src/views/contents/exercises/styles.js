import { withStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

const ExercisesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
	width: 65vw;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
	margin: 45px 0 20px 0;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	.topic-filter {
		width: 250px;
		margin-right: 25px;
	}

	.year-filter {
		width: 125px;
	}
`;

const SubjectTitle = styled.span`
	font-size: 2em;
	font-weight: 500;
`;

const StyledAutocomplete = withStyles({
	root: {
		backgroundColor: '#ECECEC',
		borderRadius: '10px',
		textAlign: 'center',

		'& input': {
			height: '15px',
			color: '#4d4d4d',
			fontWeight: 'bold'
		},

		'& .MuiOutlinedInput-notchedOutline': {
			borderWidth: '0px'
		},

		'&.Mui-focused': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderWidth: '2px',
				borderColor: '#bdbdbd',
				borderRadius: '10px'
			},

			'& label': {
				color: 'grey'
			}
		}
	}
})(Autocomplete);

export { ExercisesContainer, Header, FilterContainer, SubjectTitle, StyledAutocomplete };
