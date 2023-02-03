import { useParams } from "react-router-dom" //Propio de react router dom
import { useEffect, useState } from "react"

const Cripto = () => {

    const params = useParams()

    const API_URL = import.meta.env.VITE_API_URL

    const [coin, setCoin] = useState({})

    useEffect(() => {
        fetch(`${API_URL}assets/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            setCoin(data.data)
        })
        .catch(
            console.error("No se pudo conectar")
        )
    },[])

    return(
        <>
            <h1>{coin.name}</h1>
            <p>{JSON.stringify(coin)}</p>
        </>
    )
}

export default Cripto