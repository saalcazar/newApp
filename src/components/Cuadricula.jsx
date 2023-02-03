import { useEffect, useState } from "react"
import axios from "axios"
import Criptos from "./criptos/Criptos"
import "./Cuadricula.css"
function Cuadricula() {
    const API_URL = import.meta.env.VITE_API_URL

    const [criptos, setCriptos] = useState()

    useEffect(() => {
        fetch(`${API_URL}assets`)
          .then(resp => resp.json())
          .then(data => {
            setCriptos(data.data)
          })
          .catch(() => {
            console.error("La petición fallo")
          })

        // axios.get(`${API_URL}assets`)
        // .then(data => {
        //     setCriptos(data.data.data)
        // })
        // .catch(() => {
        //     console.error("La petición fallo")
        // })
    }, []) 
    
    if(!criptos) return <span>Cargando...</span>

    return (
        <section className="main">
            <h1 className="title">Lista de Criptomonedas</h1>
            <ul className="main-cripto">
                { 
                criptos.map(({id, name, priceUsd, symbol, explorer, changePercent24Hr}) => (
                    <Criptos 
                        key={id}
                        name={name}
                        priceUsd={priceUsd}
                        symbol={symbol}
                        explorer={explorer}
                        changePercent24Hr={changePercent24Hr}
                        id={id}
                    />
                ))
                }
            </ul>
        </section>
    )
}

export default Cuadricula
