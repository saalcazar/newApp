import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cuadricula from './components/Cuadricula'
import Pagina404 from './components/404'
import "./main.css"
import App from './components/App'
import Home from './components/Home'
import Cripto from './components/Cripto'
import Perfil from './components/usuarios/Perfil'
import {UserContextProvider} from './context/UserContext'
import Login from './components/usuarios/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} /> 
                    <Route path='perfil' element={<Perfil />}/>   
                </Route>
                <Route path='/criptos' element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path=':id' element={<Cripto />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
