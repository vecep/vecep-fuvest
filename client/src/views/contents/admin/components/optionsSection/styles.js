import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Pagination from '@material-ui/lab/Pagination';

const Label = withStyles({
	root: {
		justifyContent: 'end',
		marginRight: 0
	}
})(FormControlLabel);

const StyledPagination = withStyles({
	root: {
		margin: 'auto'
	}
})(Pagination);

export { Label, StyledPagination };
