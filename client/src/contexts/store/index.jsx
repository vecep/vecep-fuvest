import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const initialContext = {
	contextYears: [],
	contextSubjects: []
};

export const AppContext = createContext(initialContext);

const Store = props => {
	const [context, setContext] = useState(initialContext);

	useEffect(async () => {
		refreshContext();
	}, []);

	const refreshContext = async () => {
		const { data: tests } = await Axios.get('http://localhost:3001/api/tests');
		const { data: questions } = await Axios.get('http://localhost:3001/api/questions');

		const distinctYears = [...new Set(tests.map(t => t.year))];
		const distinctSubjects = [...new Set(questions.map((q) => q.subject))];

		setContext({
			contextYears: distinctYears,
			contextSubjects: distinctSubjects
		});
	};

	return (
		<AppContext.Provider value={{
			contextYears: context.contextYears,
			contextSubjects: context.contextSubjects,
			refreshContext: refreshContext
		}}>
			{props.children}
		</AppContext.Provider>
	);
};

Store.propTypes = {
	children: PropTypes.node.isRequired
};

export default Store;
