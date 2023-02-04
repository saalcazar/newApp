import { useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
import './Menu.css'
function Menu() {
    const navigation = useNavigate()
    const user = useContext(UserContext)
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/criptos'>Criptomonedas</NavLink></li>
                <li><NavLink to='/perfil'>Perfil de {user.name}</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenCriptos")
                    navigation("/login")
                }}>Cerrar sesión</a></li>
            </ul>
        </nav>
    )
}

export default Menu