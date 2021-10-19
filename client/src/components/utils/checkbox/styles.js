
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const StyledCheckbox = withStyles({
	colorPrimary: {
		'&$checked': {
			color: '#48A7FF'
		}
	},
	checked: {}
})(Checkbox);

export { StyledCheckbox };
