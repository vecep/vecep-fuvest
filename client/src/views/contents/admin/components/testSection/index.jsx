import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '../../../../../components/utils/autocomplete';
import { FormRow } from '../../styles';
import FormHeader from '../formHeader';

const TEST_STAGES = [1, 2];

const TestSection = ({ test, setTest, showMessage }) => {
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
					onChange={(_, value) => setTest({ ...test, year: value })}
					getOptionLabel={(o) => o.toString()}
					label="Ano"
					required
					disableClearable
					value={test.year || null}
					error={showMessage && !test.year}
					helperText={(showMessage && !test.year) ? 'Preencha o campo.' : ''}
				/>
				<Autocomplete
					options={TEST_STAGES}
					onChange={(_, value) => setTest({ ...test, stage: value })}
					getOptionLabel={(o) => o && `${o.toString()}ª Fase`}
					label="Fase"
					required
					disableClearable
					value={test.stage || null}
					error={showMessage && !test.stage}
					helperText={(showMessage && !test.stage) ? 'Preencha o campo.' : ''}
				/>
			</FormRow>
		</div>
	);
};

TestSection.propTypes = {
	test: PropTypes.object.isRequired,
	setTest: PropTypes.func.isRequired,
	showMessage: PropTypes.bool.isRequired
};

export default TestSection;
