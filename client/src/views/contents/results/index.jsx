import React, { useState, useEffect, useContext } from 'react';
import Stats from './components/stats';
import SubjectRate from './components/subjectRate';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { Container, Summary, Subjects, Details, Span, StyledDivider, Message } from './styles';
import getColorRange from '../../../utils/getColorRange';
import * as UserService from '../../../services/user';
import * as ExerciseService from '../../../services/exercise';
import { AppContext } from '../../../contexts/StoreContext';
import Button from '../../../components/utils/button';

const Results = () => {
	const { contextYears: tests } = useContext(AppContext);

	const [stats, setStats] = useState();
	const [generalHitRate, setGeneralHitRate] = useState();
	const [totalExercises, setTotalExercises] = useState();
	const [wrongAnswers, setWrongAnswers] = useState();
	const [showAbsoluteRate, setShowAbsoluteRate] = useState(false);

	const totalAvailableTests = tests.length;

	useEffect(() => {
		(async () => {
			const stats = await UserService.getStatistics();
			const generalHitRate = getHitRate(stats.totalAnswers, stats.totalRightAnswers);
			const { total: totalExercises } = await ExerciseService.getTotal();
			const wrongAnswers = stats.totalAnswers - stats.totalRightAnswers;

			setStats(stats);
			setGeneralHitRate(generalHitRate);
			setTotalExercises(totalExercises);
			setWrongAnswers(wrongAnswers);
		})();
	}, []);

	const getHitRate = (total, correct) => {
		if (total) {
			return parseFloat((correct / (total / 100)).toFixed(2));
		}
	};

	const renderRateBySubject = () => {
		return stats.statsBySubject.map(({ name, totalAnswered, rightAnswers }) => (
			<SubjectRate
				key={name}
				title={name}
				rate={getHitRate(totalAnswered, rightAnswers)}
				total={totalAnswered}
				correct={rightAnswers}
				absolute={showAbsoluteRate}
			/>
		));
	};

	return (
		<Container>
			<Summary>
				<Span>Taxa de acerto</Span>
				<Span color={getColorRange(generalHitRate)}>{generalHitRate}%</Span>
				<StyledDivider />
				{stats?.statsBySubject.length > 0 ? (
					<>
						<Subjects>{renderRateBySubject()}</Subjects>

						{showAbsoluteRate ? (
							<Button onClick={() => setShowAbsoluteRate(false)} variant="outlined">
							Ver valores relativos
							</Button>
						) : (
							<Button onClick={() => setShowAbsoluteRate(true)} variant="outlined">
							Ver valores absolutos
							</Button>
						)}
					</>
				) : (
					<Message>Ei, não temos nada para analisar no momento. Vai praticar!</Message>
				)}
			</Summary>
			<Details>
				<Stats
					icon={<DescriptionOutlinedIcon fontSize="large" />}
					value={stats?.totalTests}
					label="Provas feitas"
					total={totalAvailableTests}
				/>
				<Stats
					icon={<AssignmentTurnedInOutlinedIcon fontSize="large" />}
					value={stats?.totalAnswers}
					label="Exercícios resolvidos"
					total={totalExercises}
				/>
				<Stats
					icon={<WhatshotIcon fontSize="large" />}
					value={stats?.totalRightAnswers}
					label="Exercícios acertados"
					total={stats?.totalAnswers}
				/>
				<Stats
					icon={<ClearRoundedIcon fontSize="large" />}
					value={wrongAnswers}
					label="Exercícios errados"
					total={stats?.totalAnswers}
				/>
			</Details>
		</Container>
	);
};

export default Results;
