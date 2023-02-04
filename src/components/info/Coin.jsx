import { parseFloatNumber } from "../../helpers/numbers"

const Coin = ({coin}) => {
    return(
        <section className="main-coin">
            <h1 className="titulo">{coin.name}</h1>
            <div className="contenido">
                <p>{coin.symbol}<span> Ranking {coin.rank}</span></p>
                <p> Precio: <span>{parseFloatNumber(coin.priceUsd, 4)}</span></p>
                <p> Variación: <span className={parseFloat(coin.changePercent24Hr) > 0 ? "green" : "red"}>{parseFloat(coin.changePercent24Hr).toFixed(4)} %</span></p>
                <p>Volumen: <span>{parseFloatNumber(coin.volumeUsd24Hr, 4)}</span></p>
                <p>Volumen promedio: <span>{parseFloatNumber(coin.vwap24Hr, 4)}</span></p>
                <p></p>
            </div>
        </section>
    )
}

export default Coin