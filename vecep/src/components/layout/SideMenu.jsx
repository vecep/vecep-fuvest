import './SideMenu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = props => (
    <aside className='side-menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/">Matérias</Link>
                </li><hr/>
            </ul>
            
            <ul className="scroll">
                <li>
                    <Link to="/">Biologia</Link>
                </li>
                <li>
                    <Link to="/">Conhecimentos Gerais</Link>
                </li>
                <li>
                    <Link to="/">Física</Link>
                </li>
                <li>
                    <Link to="/">Geografia</Link>
                </li>
                <li>
                    <Link to="/">História</Link>
                </li>
                <li>
                    <Link to="/">Inglês</Link>
                </li>
                <li>
                    <Link to="/">Língua Portuguesa</Link>
                </li>
                <li>
                    <Link to="/">Matemática</Link>
                </li>
                <li>
                    <Link to="/">Química</Link>
                </li>
            </ul>
            <ul>
                <hr/>
                <li>
                    <Link to="/">Provas anteriores</Link>
                </li>
                <li>
                    <Link to="/">Seus resultados</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default SideMenu