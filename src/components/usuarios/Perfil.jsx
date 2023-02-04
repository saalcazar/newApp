import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Perfil = () => {
    const user = useContext(UserContext)
    return (
        <section className="main">
            <h1 className="title">Mi nombre es {user.name}</h1>
            <p>Usuario desde {user.registered}</p>
        </section>
    )
}

export default Perfil