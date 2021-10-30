import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

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

	const refreshContext = async () => {
		const { data: tests } = await Axios.get('http://localhost:3001/api/tests');
		const { data: questions } = await Axios.get('http://localhost:3001/api/questions');

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
