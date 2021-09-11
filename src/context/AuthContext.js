import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('localUser'))


    const handleUser = (user) => {
        setCurrentUser(user)
        localStorage.setItem('localUser', user)
    }


    const handleLogout = () => {
        localStorage.removeItem('localUser')
    }


    const value = { currentUser, handleUser, handleLogout }



    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;