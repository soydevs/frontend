import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import guide from '../../../../assets/svg/guide.svg'

import './GuideLogin.css'
import { AuthContext } from '../../../../context/AuthContext';
import requestHandler from '../../../../hooks/requestHandler';

function GuideLogin() {

    const { handleUser, handleToken, handleName } = useContext(AuthContext);

    const history = useHistory()
    var timeout;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    const togglePassView = () => {
        setHidden(!hidden)
    } 

    const handleLogin = async (e) => {
        e.preventDefault()
        if(username && password) {
            let data;
            let phone = /^\d+$/.test(username);

            if(phone)   data = { 'phone':username, password } 
            else data = { username, password }

            const response = await requestHandler('POST', '/auth/guides/login', data);
            handleResponse(response);
        }
        else {
            setErrorMsg('Enter all the fields')
        }
    }

    const handleResponse = (response) => {
        if(response.success) {
            handleUser(response.data.guide)
            handleToken(response.data.token)
            handleName(response.data.guide.name)
            history.push('/home')
        }
        else {
            setErrorMsg(response.message)
            timeout = setTimeout(()=>{
                setErrorMsg('')
            }, 4000)
        }
    }

    useEffect(()=>{
        return ()=>{
            clearTimeout(timeout)
        }
    })

    return (
        <div className="gSignUp">
            <div className="guide_auth_container">
                <div className="gac__left">
                    <div className="gac__left__header">
                        <h1>Guide Login</h1>
                    </div>
                    <div className="gac__left__form">
                        <form className="login__signup__form" onSubmit={handleLogin}>
                            <p>{errorMsg}</p>
                            <div className="ls_input_div">
                                <label>username / phone</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="gac_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>password</label>
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
