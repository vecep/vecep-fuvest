import React from 'react';
import { Link } from 'react-router-dom';
import { TestsContainer, ViewButton, SimulationButton } from './styles';
import provas from '../../../Mock/provas.json';

const Tests = () => {
	const provasb = () => (
		provas.map(p => <div key={p.id} className="row"><span>{p.year} - {p.stage}ª Fase</span><ViewButton><Link>Visualizar Prova</Link></ViewButton> <SimulationButton><Link>Fazer Simulado</Link></SimulationButton></div>)
	);
	return(
		<TestsContainer>
			<select id="filter">
				<option value="1"></option>
				<option value="2">Primeira Fase</option>
				<option value="3">Segunda Fase</option>
			</select>
			{provasb()}
		</TestsContainer>
	);
};

export default Tests;
