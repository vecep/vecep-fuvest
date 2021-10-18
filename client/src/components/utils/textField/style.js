import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const StyledTextField = withStyles({
	root: {
		'& input, .MuiOutlinedInput-multiline': {
			color: '#4d4d4d',
			borderRadius: '5px',
			borderBottom: '5px',
			backgroundColor: '#ECECEC',
			fontWeight: 'bold'
		},

		'& .MuiOutlinedInput-notchedOutline': {
			borderWidth: '0px'
		},

		'& .Mui-error .MuiOutlinedInput-notchedOutline': {
			borderWidth: '1px'
		},

		'&:focus-within': {
			borderWidth: '2px',
			borderRadius: '5px',

			'& .MuiOutlinedInput-notchedOutline': {
				borderWidth: '2px',
				borderColor: '#bdbdbd',
				borderRadius: '5px'
			},
			'& .Mui-error .MuiOutlinedInput-notchedOutline': {
				borderColor: '#f44336'
			},
			'& label': {
				color: '#282727',
				fontWeight: 'bold'
			}
		}
	}
})(TextField);

const DialogContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	gap: 2.5rem;

	> * {
		display: flex;
		justify-content: center;
	}

	> :first-child {
		word-break: break-all;
		height: 100%;
		max-height: 30vh;
		overflow-y: auto;
		margin: 0;
	}
`;

export { StyledTextField, DialogContainer };
