import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BsEye, BsEyeSlash } from "react-icons/bs";

import './Login.css'

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
                                <p>not yet signed up ?</p>
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
                        {/* <div class="spin-container">
                            <div class="circle outer">
                                <div class="circle middle">
                                    <img src="https://cdn1.iconfinder.com/data/icons/landmarks-and-monuments/96/india_historical_landmark_world_monument_arabic-512.png" alt=""  />
                                    <img src="https://www.flaticon.com/premium-icon/icons/svg/1821/1821160.svg" alt="" />
                                    <img src="https://cdn.iconscout.com/wordpress/2017/04/gatewayofindia-gate-way-india-mumbai-heritage-sites-india.png" alt="" />
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/chennai-1-119692.png" alt="" />
                                    <img src="https://cdn.iconscout.com/icon/free/png-512/hawamahal-1-119697.png" alt=""  />
                                    <img src="https://cdn3.iconfinder.com/data/icons/chinese-new-year-2042/32/paifang_chinese_temple_monument-512.png" alt="" />
                                    <div class="circle inner" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
