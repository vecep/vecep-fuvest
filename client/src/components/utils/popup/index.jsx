import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

const Popup = ({ open, handleClose, message, severity, props }) => (
	<Snackbar
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left'
		}}
		open={open}
		autoHideDuration={1500}
		onClose={handleClose}
	>
		<Alert severity={severity} variant="filled" {...props}>
			{message}
			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</Alert>
	</Snackbar>
);

Popup.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
	severity: PropTypes.string,
	props: PropTypes.any
};

export default Popup;
