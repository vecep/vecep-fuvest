import { withStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const StyledAutocomplete = withStyles({
	root: {
		backgroundColor: '#ECECEC',
		borderRadius: '10px',
		textAlign: 'center',

		'& input': {
			height: '15px',
			color: '#4d4d4d',
			fontWeight: 'bold',
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
				color: 'grey',
			}
		},
	}
})(Autocomplete);

export { StyledAutocomplete };
