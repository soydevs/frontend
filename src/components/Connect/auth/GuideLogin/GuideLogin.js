import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import guide from '../../../../assets/svg/guide.svg'

import './GuideLogin.css'

function GuideLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        if(username && password) {
            const data = {
                username,
                password,

            }
            console.log(data)
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    return (
        <div className="gSignUp">
            <div className="guide_auth_container">
                <div className="gac__left">
                    <div className="gac__left__header">
                        <h1>Login</h1>
                    </div>
                    <div className="gac__left__form">
                        <form className="login__signup__form" onSubmit={handleSignUp}>
                            <p>{errorMsg}</p>
                            <div className="ls_input_div">
                                <label>Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="gac_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="gac_input" type={hidden ? 'password' : 'text'}/>
                                {hidden ? (
                                    <BsEyeSlash onClick={togglePassView} className="pass-icon"/>
                                    ) : (
                                    <BsEye onClick={togglePassView} className="pass-icon"/>
                                )}
                            </div>
                            <div className="login__signup__btn">
                                <button type="submit" className="signup_btn">Login</button>
                                <h6>not yet signed up ?</h6>
                                <Link to="/guide/signup"><button className="login_btn">Signup</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="gac_right">
                    <img src={guide} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GuideLogin
