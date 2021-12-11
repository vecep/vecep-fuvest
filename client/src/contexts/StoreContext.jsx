import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as testApi from 'apis/test';
import * as questionApi from 'apis/question';

const initialContext = {
	contextYears: [],
	contextSubjects: [],
	params: null
};

export const AppContext = createContext(initialContext);

const Store = (props) => {
	const [context, setContext] = useState(initialContext);

	useEffect(() => {
		(async () => {
			await refreshContext();
		})();
	}, []);

	const getTests = async () => testApi.getAll();

	const getQuestions = async () => questionApi.getAll();

	const refreshContext = async () => {
		const tests = await getTests();
		const questions = await getQuestions();

		const distinctYears = [...new Set(tests.map((t) => t.year))];
		const distinctSubjects = [...new Set(questions.map((q) => q.subject))];

		setContext({
			...context,
			contextYears: distinctYears,
			contextSubjects: distinctSubjects
		});
	};

	return (
		<AppContext.Provider
			value={{
				contextYears: context.contextYears,
				contextSubjects: context.contextSubjects,
				refreshContext: refreshContext,
				params: context.params,
				setParams: (newParams) =>
					setContext({ ...context, params: { ...context.params, ...newParams } })
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

Store.propTypes = {
	children: PropTypes.node.isRequired
};

export default Store;
