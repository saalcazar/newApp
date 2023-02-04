import { useEffect, useState } from "react"

const usePetition = (endPoint) => {
    const API_URL = import.meta.env.VITE_API_URL
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)

        fetch(`${API_URL}${endPoint}`)
        .then(resp => resp.json())
        .then(data => {
            setData(data.data)
            setLoading(false)
        })
        .catch(e => {
            setLoading(false)
            console.error(e)
        }
        )
    },[])

    return [data, loading]
}

export default usePetition