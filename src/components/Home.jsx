import { Link } from "react-router-dom"

const Home = ()=>{
    return(
        <>
            <h1>Hola bienvenido a Cripto</h1>
            <p>Conoce las 100 Criptos más usadas</p>
            <Link to="/criptos">Ver criptomonedas</Link>
        </>
    )
}

export default Home