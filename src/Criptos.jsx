import { useEffect, useState } from "react"
import axios from "axios"
import "./Criptos.css"
const Criptos = () => {
    const API_URL = import.meta.env.VITE_API_URL

    const [criptos, setCriptos] = useState()

    useEffect(() => {
        // fetch(`${API_URL}assets`)
        //   .then(resp => resp.json())
        //   .then(data => {
        //     setCriptos(data.data)
        //   })
        //   .catch(() => {
        //     console.error("La petición fallo")
        //     console.log(`${import.meta.env.VITE_API_URL}assets`)
        //   })

        axios.get(`${API_URL}assets`)
        .then(data => {
            setCriptos(data.data.data)
        })
        .catch(() => {
            console.error("La petición fallo")
        })
    }, []) 
    
    if(!criptos) return <span>Cargando...</span>

    return (
        <section className="main">
            <h1 className="title">Lista de Criptomonedas</h1>
            <ul className="main-cripto">
                {
                criptos.map(({id, name, priceUsd, symbol, explorer}) => (
                    <li key={id} className="cripto">
                        <h3 className="name-cripto">{name}</h3>
                        <span className="symbol">{symbol}</span>
                        <p className="precio">Precio en USD:<span>{priceUsd}</span></p>
                        <a href={explorer} className="link">Más información</a>
                    </li>
                ))
                }
            </ul>
        </section>
    )
}

export default Criptos