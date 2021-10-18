import { withStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const StyledAutocomplete = withStyles({
	root: {
		'& .MuiAutocomplete-inputRoot': {
			backgroundColor: '#ECECEC',
			borderRadius: '5px'
		},

		'& input': {
			color: '#4d4d4d',
			fontWeight: 'bold'
		},

		'& .MuiOutlinedInput-notchedOutline': {
			borderWidth: '0'
		},

		'& .Mui-error .MuiOutlinedInput-notchedOutline': {
			borderWidth: '1px'
		},

		'&.Mui-focused': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderWidth: '2px',
				borderColor: '#bdbdbd',
				borderRadius: '5px'
			},

			'& label': {
				color: 'grey'
			}
		}
	},
	paper: {
		borderRadius: '5px',
		padding: '10px 0',
		minWidth: 'fit-content'
	},
	listbox: {
		'& li:hover': {
			color: 'white',
			backgroundColor: '#48A7FF'
		}
	}
})(Autocomplete);

export { StyledAutocomplete };
