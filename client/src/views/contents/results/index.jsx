import React from 'react';
import Stats from './components/stats';
import SubjectRate from './components/subjectRate';
import TimerIcon from '@material-ui/icons/Timer';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { Container, Summary, Subjects, Details, Span, StyledDivider } from './styles';
import getColorRange from '../../../utils/getColorRange';

const Results = () => {
	const rightAnswers = 23;
	const totalAnswers = 37;
	const hitRate = (rightAnswers / (totalAnswers / 100)).toFixed(2);

	const renderRateBySubject = () => {
		return (
			<SubjectRate title="Geografia" rate={20} />
		);
	};

	return (
		<Container>
			<Summary>
				<Span>
					Taxa de acerto
				</Span>
				<Span color={getColorRange(hitRate)}>
					{hitRate}%
				</Span>
				<StyledDivider />
				<Subjects>
					{renderRateBySubject()}
				</Subjects>
			</Summary>
			<Details>
				<Stats
					icon={<TimerIcon fontSize="large" />}
					value={20}
					label="Tempo médio"
				/>
				<Stats
					icon={<DescriptionOutlinedIcon fontSize="large" />}
					value={3}
					label="Provas feitas"
				/>
				<Stats
					icon={<AssignmentTurnedInOutlinedIcon fontSize="large" />}
					value={totalAnswers}
					label="Exercícios resolvidos"
				/>
				<Stats
					icon={<WhatshotIcon fontSize="large" />}
					value={rightAnswers}
					label="Exercícios acertados"
				/>
				<Stats
					icon={<ClearRoundedIcon fontSize="large" />}
					value={14}
					label="Exercícios errados"
				/>
			</Details>
		</Container>
	);
};

export default Results;
