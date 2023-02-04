import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({})
    useEffect(() => {
        setUser({
            name: "Samuel Alcazar",
            registered: "07 de Julio de 2022"
        })
    },[])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}
