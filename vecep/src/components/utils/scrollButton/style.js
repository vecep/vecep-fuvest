import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Button = withStyles({
  root: {
    position: 'fixed',
    bottom: '30px',
    zIndex: '1',
    cursor: 'pointer',
    marginLeft: '95%',
    color: '#48A7FF',
  }
})(IconButton);

export default Button;