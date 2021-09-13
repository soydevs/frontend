import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BsEye, BsEyeSlash } from "react-icons/bs";

import './SignUp.css'
import Globe from '../../UI/Globe/Globe';

function SignUp() {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)

    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        if(username && name && phone && password) {
            console.log(username)
            console.log(name)
            console.log(phone)
        }
        else {
            alert('Enter all the fields')
        }
    }

    return (
        <div className="signUp">
            <div className="login__signup__container">
                <div className="lsc__left">
                    <div className="lsc__left__header">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="lsc__left__form">
                        <form className="login__signup__form" onSubmit={handleSignUp}>
                            <div className="ls_input_div">
                                <label>Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="ls_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="ls_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} className="ls_input" type="text"/>
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
                                <button type="submit" className="signup_btn">Sign Up</button>
                                <h6>already signed up ?</h6>
                                <Link to="/login"><button className="login_btn">Log in</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lsc__right">
                    <div className="lsc__right__header">
                        <h1>Your journey begins here...</h1>
                    </div>
                    <div className="lsc__right_sphere">
                        <Globe />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
