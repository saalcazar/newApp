import { useParams } from "react-router-dom" //Propio de react router dom
import "./Cripto.css"
import usePetition from "../hooks/usePetition"
import Coin from "./info/Coin"
import History from "./info/History"
const Cripto = () => {

    const params = useParams()

    const [coin, loadingCoin] = usePetition(`assets/${params.id}`)
    const [history, loadingHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if(loadingCoin || loadingHistory) return <span>Cargando</span>

    return(
        <section className="cripto-main">
        {coin && <Coin coin={coin}/>}
        {history && <History history={history} />}
        </section>
    )
}

export default Cripto