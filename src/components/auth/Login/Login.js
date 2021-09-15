import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from '../../../context/AuthContext'
import './Login.css'
import Globe from '../../UI/Globe/Globe';


function Login() {
    const [errorMsg, setErrorMsg] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)

    const { handleUser, handleToken, handleName } = useContext(AuthContext);
    const history = useHistory()

    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const URL = process.env.REACT_APP_BASE_URL + '/auth/login';
        const data = {
            username,
            password
        }
        if(username && password) {
            setErrorMsg('')
            try {
                const res = await axios.post(URL, data)
                if(res.data.success) {
                    handleToken(res.data.token)
                    handleUser(res.data.user)
                    handleName(res.data.user.name)
                    console.log(res)
                    history.push('/home')
                } else {
                    setErrorMsg('Invalid credentials')
                }
            } catch (error) {
                console.log(error)
                setErrorMsg('Signin failed!')
                setTimeout(() => { setErrorMsg('') }, 4000)
            }
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    console.log(errorMsg)


    return (
        <div className="login">
            <div className="login__signup__container">
                <div className="lsc__left">
                    <div className="lsc__left__header">
                        <h1>Login</h1>
                    </div>
                    <div className="lsc__left__form login__transform">
                        <form className="login__signup__form" onSubmit={handleSignUp}>
                            <div className="ls_input_div">
                                <label>Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="ls_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="ls_input" type={hidden ? 'password' : 'text'}/>
                                {hidden ? (
                                    <BsEyeSlash onClick={togglePassView} className="pass-icon"/>
                                    ) : (
                                    <BsEye onClick={togglePassView} className="pass-icon"/>
                                )}
                            </div>
                            <div className="login__signup__btn">
                                <button type="submit" className="signup_btn">Login</button>
                                <h6>not yet signed up ?</h6>
                                <Link to="/signup"><button className="login_btn">Signup</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lsc__right">
                    <div className="lsc__right__header">
                        <h1>Welcome Back, User</h1>
                    </div>
                    <div className="lsc__right_sphere">
                        <Globe />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
