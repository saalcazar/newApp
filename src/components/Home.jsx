import { Link } from "react-router-dom"
import "./Home.css"

const Home = ()=>{
    return(
        <section className="main">
            <h1 className="title">Bienvenido a Criptos</h1>
            <p className="subtitle">Conoce las 100 Criptomonedas más usadas</p>
            <Link to="/criptos" className="boton">Ver criptomonedas</Link>
        </section>
    )
}

export default Home