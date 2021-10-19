import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {
	CardContainer,
	Header,
	ActionContainer,
	StartButton,
	StopButton,
	ContinueButton,
	CollapsedContent
} from './styles';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';
import Draggable from 'react-draggable';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../../../../../components/utils/button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { StyledCheckbox } from '../../../../../components/utils/checkbox/styles';

const STAGE_ONE_MAXHOURS = 5;
const STAGE_TWO_MAXHOURS = 4;
const HOURS_TO_OR_FROM_SECONDS = 3600;
const MINUTES_TO_OR_FROM_SECONDS = 60;
const ONE_DIGIT_LIMIT = 9;
const TIME_BASE = 60;

const Timer = ({ stage, paused, setPaused }) => {
	const [seconds, setSeconds] = useState(0);
	const [activeDrags, setActiveDrags] = useState();
	const [started, setStarted] = useState(false);
	const [expanded, setExpanded] = useState(true);
	const [showMessage, setShowMessage] = useState(false);

	useEffect(() => {
		setTimeLimit();
	}, [stage]);

	useEffect(() => {
		started && !paused && seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
	}, [seconds, started, paused]);

	const setTimeLimit = () => {
		switch (stage) {
		case '1':
			setSeconds(STAGE_ONE_MAXHOURS * HOURS_TO_OR_FROM_SECONDS);
			break;
		case '2':
			setSeconds(STAGE_TWO_MAXHOURS * HOURS_TO_OR_FROM_SECONDS);
			break;
		default:
			break;
		}
	};

	const displayTime = () => {
		const hours = Math.floor(seconds / HOURS_TO_OR_FROM_SECONDS);
		const minutes = (seconds - (seconds % TIME_BASE)) / MINUTES_TO_OR_FROM_SECONDS;

		const toDisplay = (time) => time % TIME_BASE;

		return (
			<span>
				{toDisplay(hours) > ONE_DIGIT_LIMIT ? toDisplay(hours) : '0' + toDisplay(hours)}
				{toDisplay(minutes) > ONE_DIGIT_LIMIT ? ':' : ':0'}
				{toDisplay(minutes)}
				{toDisplay(seconds) > ONE_DIGIT_LIMIT ? ':' : ':0'}
				{toDisplay(seconds)}
			</span>
		);
	};

	const onStart = () => {
		setActiveDrags(activeDrags + 1);
	};

	const onStop = () => {
		setActiveDrags(activeDrags - 1);
	};
	const dragHandlers = { onStart, onStop };

	const handleStart = () => {
		setStarted(true);
		setPaused(false);
	};

	const handlePause = () => {
		setPaused(true);
	};

	const handleUnpause = () => {
		setPaused(false);
	};

	const handleClickOpen = () => {
		const showResetTimerAlert = JSON.parse(localStorage.getItem('showResetTimerAlert'));

		switch(showResetTimerAlert) {
		case true:
			setShowMessage(true);
			break;
		case false:
			setTimeLimit();
			break;
		default:
			localStorage.setItem('showResetTimerAlert', true);
			setShowMessage(true);
			break;
		}
	};

	const handleClose = () => {
		setShowMessage(false);
	};

	const handleReset = () => {
		setTimeLimit();
		handleClose();
	};

	const renderDialog = () => (
		<Dialog
			open={showMessage}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">Reiniciar o timer</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Reiniciar o timer ocasionará na limpeza das questões já respondidas. Tem certeza que
					deseja fazer isso?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<FormControlLabel
					control={<StyledCheckbox color="primary" size="small" />}
					label="Não mostrar novamente"
					onChange={(event) => localStorage.setItem('showResetTimerAlert', !event.target.checked)}
					value={localStorage.getItem('showResetTimerAlert')}
				/>
				<Button onClick={handleClose} color="primary">
					Cancelar
				</Button>
				<Button onClick={handleReset} color="primary" autoFocus>
					Resetar
				</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<>
			{renderDialog()}
			<Draggable {...dragHandlers} bounds="parent">
				<CardContainer>
					<Header>
						{!expanded ? (
							<IconButton aria-label="settings-maximize" onClick={() => setExpanded(true)}>
								<VisibilityOffIcon />
							</IconButton>
						) : (
							<IconButton aria-label="settings-minimize" onClick={() => setExpanded(false)}>
								<VisibilityIcon />
							</IconButton>
						)}
					</Header>
					<CollapsedContent in={expanded} timeout="auto" unmountOnExit>
						<CardContent>{displayTime()}</CardContent>
						<CardActions>
							{!started ? (
								<StartButton size="small" onClick={handleStart}>
									Começar
								</StartButton>
							) : (
								<ActionContainer>
									{!paused ? (
										<StopButton size="small" onClick={handlePause}>
											Pausar
										</StopButton>
									) : (
										<ContinueButton size="small" onClick={handleUnpause}>
											Retomar
										</ContinueButton>
									)}
									<IconButton onClick={handleClickOpen} disabled={!paused}>
										<ReplayIcon />
									</IconButton>
								</ActionContainer>
							)}
						</CardActions>
					</CollapsedContent>
				</CardContainer>
			</Draggable>
		</>
	);
};

Timer.propTypes = {
	stage: PropTypes.string,
	paused: PropTypes.bool,
	setPaused: PropTypes.func
};

export default Timer;
