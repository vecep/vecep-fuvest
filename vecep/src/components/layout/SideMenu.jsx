import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentPage } from '../../utils/getCurrentPage';
import { normalizeWord } from '../../utils/normalizeWord';
import './SideMenu.css';

// mocked database select

// SELECT DISTINCT subject FROM questions
const mocked_subjects = ['Biologia', 'Conhecimentos Gerais', 'Física', 'Geografia', 'História', 'Inglês', 'Língua Portuguesa', 'Matemática', 'Química'].sort();

// SELECT DISTINCT year FROM test
const mocked_years = ['2020', '2019', '2018', '2017', '2016', '2015'];

const urlMapping = [
	{
		path: '/exercicios',
		label: 'Exercícios',
		subjects: mocked_subjects
	},
	{
		path: '/provas',
		label: 'Provas anteriores',
		subjects: mocked_years
	},
	{
		path: '/resultados',
		label: 'Seus resultados',
		subjects: [],
	},
];

const SideMenu = () => {
	const { root_path } = getCurrentPage();

	const [routeLabel] = urlMapping.reduce((routeLabel, url) => {
		url.path === root_path && routeLabel.push(url.label);
		
		return routeLabel;
	}, []);

	const [items] = urlMapping.reduce((items, url) => {
		url.path === root_path && items.push(url.subjects);
		
		return items;
	}, []);

	const topics = urlMapping.filter((t) => t.path !== root_path);

	const renderSideItems = () => {
		return items.map((i) => (
			<li key={i}>
				<Link to={`${root_path}/${normalizeWord(i.toLowerCase())}`}>{i}</Link>
			</li>
		));
	};

	const renderSideTopics = () => {
		return topics.map((o) => (
			<li key={o.path}>
				<Link to={`${o.path}`}>{o.label}</Link>
			</li>
		));
	};

	return (
		<aside className="side-menu">
			<nav>
				<ul>
					<li>
						<Link to={`${normalizeWord(root_path)}`}>
							{routeLabel}
						</Link>
					</li>
					<hr />
				</ul>

				{root_path !== '/resultados' && (
					<>
						<ul className="scroll">
							{renderSideItems()}
						</ul>

						<hr />
					</>
				)}
				<ul>
					{renderSideTopics()}
				</ul>
			</nav>
		</aside>
	);
};

export default SideMenu;
