import './App.css'
import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import SideMenu from '../components/layout/SideMenu'

const App = props => (
    <div className="App">
        <Router>
            <Menu />
            <div className="side-menu-content"> 
                <SideMenu />
                <Content />
            </div>
        </Router>
    </div>
)

export default App;