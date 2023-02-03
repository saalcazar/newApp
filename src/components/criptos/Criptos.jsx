
import { Link } from "react-router-dom"
import "./Criptos.css"
const Criptos = ({id, name, priceUsd, symbol, changePercent24Hr}) => {
    return(
        <li key={id} className="cripto">
            <h3 className="name-cripto">{name}</h3>
            <span className="symbol">{symbol}</span>
            <p className="precio">Precio en USD:<span>{parseFloat(priceUsd).toFixed(4)}</span></p>
            <p className="variacion">Variación 24hrs:<span className={ parseFloat(changePercent24Hr) > 0 ? "green" : "red" }>{
                parseFloat(changePercent24Hr).toFixed(4)
            } %</span></p>
            <Link to={`/criptos/${id}`} className="link">Más información</Link>
        </li>
    )
}

export default Criptos