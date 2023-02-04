import { Navigate, Outlet } from "react-router-dom"
import Menu from "./menu/menu"

const App = () => {
    if(!localStorage.getItem("tokenCriptos")) return <Navigate to="/login" />
    return(
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default App