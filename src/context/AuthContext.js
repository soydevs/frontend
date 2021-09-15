import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('soydevsUser'))
    const [name, setName] = useState(localStorage.getItem('soydevsName'))
    const [token, setToken] = useState(localStorage.getItem('token'))

    const handleUser = (user) => {
        setCurrentUser(user)
        localStorage.setItem('soydevsUser', user)
    }
    console.log('current name' + name)

    const handleToken = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const handleName = (name) => {
        setName(name)
        localStorage.setItem('soydevsName', name)
    }


    const handleLogout = () => {
        localStorage.removeItem('soydevsUser')
        localStorage.removeItem('token')
    }


    const value = { currentUser, handleUser, handleLogout, handleToken, token, name, handleName }



    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;