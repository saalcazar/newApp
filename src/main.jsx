import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cuadricula from './components/Cuadricula'
import Pagina404 from './components/404'
import "./main.css"
import App from './components/App'
import Home from './components/Home'
import Cripto from './components/Cripto'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/criptos' element={<App />}>
                <Route index element={<Cuadricula />} />
                <Route path=':id' element={<Cripto />} />
            </Route>
            <Route path='*' element={<Pagina404 />} />
        </Routes>
    </BrowserRouter>
)
