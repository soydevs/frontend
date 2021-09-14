import React, { useState , useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import './SignUp.css'
import { AuthContext } from '../../../context/AuthContext'
import Globe from '../../UI/Globe/Globe';

function SignUp() {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    const history = useHistory()

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        history.push('/')
    }


    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const URL = process.env.REACT_APP_BASE_URL + '/auth/signup'
        const data = {
            username,
            name,
            phone,
            password
        }
        if(username && name && phone && password) {
            console.log(URL)
            try {// eslint-disable-next-line
                const res = await axios.post(URL, data)
                history.push('/login')
                console.log(res)
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
