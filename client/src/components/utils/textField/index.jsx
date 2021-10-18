import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledTextField, DialogContainer } from './style';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import { Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../button';
import Latext from '../latext';

const TextField = ({ latex, ...props }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const renderLatexVisible = () => (
		<Tooltip title="Visualizar LaTeX" placement="top" arrow>
			<InputAdornment position="end">
				<IconButton onClick={handleClickOpen} disabled={!props.value}>
					{open ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
				</IconButton>
			</InputAdornment>
		</Tooltip>
	);

	const getInputProps = () => {
		const inputProps = {};

		if (latex) {
			inputProps.endAdornment = renderLatexVisible();
		}
		return inputProps;
	};

	const renderDialog = () => (
		<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
			<DialogTitle id="form-dialog-title">Visualizar LaTeX</DialogTitle>
			<DialogContent>
				<DialogContainer>
					<Latext label>{props.value || ''}</Latext>
					<TextField
						{...props}
						maxRows={6}
					/>
				</DialogContainer>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
            Ok
				</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<>
			{latex && renderDialog()}
			<StyledTextField
				{...props}
				variant="outlined"
				InputProps={getInputProps()}
			/>
		</>
	);
};

TextField.propTypes = {
	latex: PropTypes.bool,
	value: PropTypes.string,
	props: PropTypes.any
};

export default TextField;
