import { parseFloatNumber } from "../../helpers/numbers"

const History = ({history}) => {
    return(
        <section className="main-history">
            <h1 className="titulo">Historial</h1>
            <table>
                <thead className="head">
                    <tr>
                        <th>Precio</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(({priceUsd, time, date}) => (
                        <tr key={time}>
                            <td>{parseFloatNumber(priceUsd, 4)}</td>
                            <td>{new Date(date).toDateString()}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default History