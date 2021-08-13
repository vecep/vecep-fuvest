import './SideMenu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SideMenu = props => {
    const location = useLocation();

    const batata = [
        {
            subdirectory: 'exercicios',
            label: 'Exercícios',
            subjects: ['Biologia', 'Conhecimentos Gerais', 'Física', 'Geografia', 'História', 'Inglês', 'Língua Portuguesa', 'Matemática', 'Química']
        }, 
        {
            subdirectory: 'resultados',
            label: 'Seus resultados',
            subjects: []
        },
        {
            subdirectory: 'provas',
            label: 'Provas anteriores',
            subjects: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013']
        }
    ];

    const getCurrentPage = () => {
        const a = location.pathname.match(/[^/]+$/g).shift(); // \/\w*

        const b = batata.filter(t => t.subdirectory === a).shift();
            
        return { subdirectory: a, label: b.label}
    }

    const normalizeWord = (word) => (
        word.normalize('NFD').replace(/\p{Diacritic}/gu, "")
    )

    const renderSideItems = () => {        
        const a = batata.reduce((currentSubjects, t) => {
            if (normalizeWord(t.subdirectory) === getCurrentPage().subdirectory) {
                currentSubjects.push(t.subjects)
            }
            return currentSubjects
        }, []).shift();
     
        return (a.map(s => (
            <li key={s}><a href={`${getCurrentPage()}`}>{s}</a></li>
        )))
    }

    const renderTopics = () => {
        let otherTopics = [];

        batata.filter(t => t.subdirectory !== getCurrentPage().subdirectory && otherTopics.push(t))

        return otherTopics.map(o =>
            <li key={o.subdirectory}>
                <Link to={`/${o.subdirectory}`}>{o.label}</Link>
            </li>
        )
    };

    return (
        <aside className='side-menu'>
            <nav>
                <ul>
                    <li>
                        <Link to={`/${normalizeWord(getCurrentPage().subdirectory)}`}>{getCurrentPage().label}</Link>
                    </li>
                    <hr />
                </ul>
                <ul className="scroll">
                    {renderSideItems()}
                </ul>
                <ul>
                    <hr />
                    {renderTopics()}
                </ul>
            </nav>
        </aside>
    );
}
export default SideMenu