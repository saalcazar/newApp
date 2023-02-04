import Criptos from "./criptos/Criptos"
import "./Cuadricula.css"
import usePetition from "../hooks/usePetition"
function Cuadricula() {
    
    const [criptos, loading] = usePetition(`assets`)

    if(loading) return <span>Cargando...</span>

    return (
        <section className="main">
            {
                criptos && (
                    <>
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
                    </>
                )
            }
        </section>
    )
}

export default Cuadricula
