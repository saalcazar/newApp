import { NavLink } from 'react-router-dom'
import './Menu.css'
function Menu() {
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/criptos'>Criptomonedas</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu