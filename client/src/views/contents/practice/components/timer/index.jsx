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

const STAGE_ONE_MAXHOURS = 5;
const STAGE_TWO_MAXHOURS = 4;
const HOURS_TO_OR_FROM_SECONDS = 3600;
const MINUTES_TO_OR_FROM_SECONDS = 60;
const ONE_DIGIT_LIMIT = 9;
const TIME_BASE = 60;

const Timer = ({ stage }) => {
	const [seconds, setSeconds] = useState(0);
	const [activeDrags, setActiveDrags] = useState();
	const [started, setStarted] = useState(false);
	const [paused, setPaused] = useState(false);
	const [expanded, setExpanded] = useState(true);

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

	return (
		<Draggable
			{...dragHandlers}
			bounds="parent"
		>
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
							<StartButton size="small" onClick={() => setStarted(true)}>
								Começar
							</StartButton>
						) : (
							<ActionContainer>
								{!paused ? (
									<StopButton size="small" onClick={() => setPaused(true)}>
										Pausar
									</StopButton>
								) : (
									<ContinueButton size="small" onClick={() => setPaused(false)}>
										Retomar
									</ContinueButton>
								)}
								<IconButton onClick={setTimeLimit} disabled={!paused}>
									<ReplayIcon />
								</IconButton>
							</ActionContainer>
						)}
					</CardActions>
				</CollapsedContent>
			</CardContainer>
		</Draggable>
	);
};

Timer.propTypes = {
	stage: PropTypes.string
};

export default Timer;
