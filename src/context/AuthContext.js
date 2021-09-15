import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('soydevsLocalUser'))
    const [token, setToken] = useState(localStorage.getItem('soydevsToken'))

    const handleUser = (user) => {
        setCurrentUser(user)
        localStorage.setItem('soydevsLocalUser', user)
        console.log('current user' + currentUser)
    }

    const handleToken = (token) => {
        setToken(token)
        localStorage.setItem('soydevsToken', token)
    }


    const handleLogout = () => {
        localStorage.removeItem('soydevsLocalUser')
        localStorage.removeItem('soydevsToken')
    }


    const value = { currentUser, handleUser, handleLogout, handleToken, token }



    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;