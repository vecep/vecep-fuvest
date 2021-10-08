import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '../../../../../components/utils/autocomplete';
import { FormRow } from '../../styles';
import FormHeader from '../formHeader';

const TEST_STAGES = [1, 2];

const TestSection = ({ setTest, showMessage }) => {
	const [year, setYear] = useState();
	const [stage, setStage] = useState();

	useEffect(() => {
		setTest({ year, stage });
	}, [year, stage]);

	const getYearOptions = () => {
		const currentYear = new Date().getFullYear();
		const FIRST_FUVEST_TEST_YEAR = 1980;
		let options = [];

		for (let i = currentYear; i >= FIRST_FUVEST_TEST_YEAR; i--) {
			options.push(i);
		}
		return options;
	};

	return (
		<div>
			<FormHeader title="Prova" />
			<FormRow>
				<Autocomplete
					options={getYearOptions()}
					onChange={(_, value) => setYear(value)}
					getOptionLabel={(o) => o.toString()}
					label="Ano"
					required
					disableClearable
					value={year || null}
					error={showMessage && !year}
					helperText={(showMessage && !year) ? 'Preencha o campo.' : ''}
				/>
				<Autocomplete
					options={TEST_STAGES}
					onChange={(_, value) => setStage(value)}
					getOptionLabel={(o) => o && `${o.toString()}ª Fase`}
					label="Fase"
					required
					disableClearable
					value={stage || null}
					error={showMessage && !stage}
					helperText={(showMessage && !stage) ? 'Preencha o campo.' : ''}
				/>
			</FormRow>
		</div>
	);
};

TestSection.propTypes = {
	setTest: PropTypes.func.isRequired,
	showMessage: PropTypes.bool.isRequired
};

export default TestSection;
