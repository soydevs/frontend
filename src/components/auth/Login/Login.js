import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BsEye, BsEyeSlash } from "react-icons/bs";

import './Login.css'
import ls_img1 from '../../../assets/svg/ls_img1.svg'
import ls_img2 from '../../../assets/svg/ls_img2.svg'
import ls_img3 from '../../../assets/svg/ls_img3.svg'
import ls_img4 from '../../../assets/svg/ls_img4.svg'
import ls_img5 from '../../../assets/svg/ls_img5.svg'
import ls_img6 from '../../../assets/svg/ls_img6.svg'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)

    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        if(username && password) {
            console.log(username)
        }
        else {
            alert('Enter all the fields')
        }
    }


    return (
        <div className="login">
            <div className="login__signup__container">
                <div className="lsc__left">
                    <div className="lsc__left__header">
                        <h1>Login</h1>
                    </div>
                    <div className="lsc__left__form">
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
                        <div className="lsc__right_sphere">
                            <div className="spin-container">
                                <div className="circle outer">
                                    <div className="circle middle">
                                        <img className="ls__img ls_img1" src={ls_img1} alt=""  />
                                        <img className="ls__img ls_img2" src={ls_img2} alt="" />
                                        <img className="ls__img ls_img3" src={ls_img3} alt="" />
                                        <img className="ls__img ls_img4" src={ls_img4} alt="" />
                                        <img className="ls__img ls_img5" src={ls_img5} alt=""  />
                                        <img className="ls__img ls_img6" src={ls_img6} alt="" />
                                        <div className="circle inner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
