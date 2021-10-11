import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Pagination from '@material-ui/lab/Pagination';

const Label = withStyles({
	root: {
		justifyContent: 'end',
		marginRight: 0
	}
})(FormControlLabel);

const StyledSwitch = withStyles({
	colorPrimary: {
		'&$checked': {
			'& .MuiSwitch-thumb': {
				background: '#48A7FF'
			}
		}
	},
	checked: {}
})(Switch);

const StyledPagination = withStyles({
	root: {
		margin: 'auto'
	}
})(Pagination);

export { Label, StyledSwitch, StyledPagination };
