import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate} from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const[loading, setLoading] = useState(false)
    const[error, setError] = useState()

    const submit = (e) => {
        setLoading(true)
        setError(null)
        e.preventDefault()
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setLoading(false)
            localStorage.setItem("tokenCriptos", data.data.token)
            navigation("/")
        })
        .catch(e =>{
            setLoading(false) 
            console.table(e)
            setError(e.response.data.error)
        })
            
    }

    if(localStorage.getItem("tokenCriptos")) return <Navigate to="/" />

    return (
        <div className="login-main">
            <h1>Iniciar sesión</h1>
            <form action="" onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo electrónico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email"/>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password" id="" />
                </div>
                <div className="submit">
                    <input type="submit" value={loading ? "Cargando" : "Ingresar"} />
                </div>
            </form>
            { error && <span className="error">Error: {error}</span>}
        </div>
    )
}

export default Login