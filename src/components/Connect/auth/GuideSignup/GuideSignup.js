import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BsEye, BsEyeSlash } from "react-icons/bs";

import guide from '../../../../assets/svg/guide.svg'
import requestHandler from '../../../../hooks/requestHandler';
import './GuideSignup.css'
import { AuthContext } from '../../../../context/AuthContext';

function GuideSignup() {

    const { handleUser, handleToken, handleName } = useContext(AuthContext);

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')

    const [hidden, setHidden] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    const history = useHistory()
    var timeout;

    const togglePassView = () => {
        setHidden(!hidden)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        if(username && name && phone && location && password) {
            const data = {
                username,
                password,
                name,
                phone, 
                location
            }
            const response = await requestHandler('POST', '/auth/guides/signup', data);
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
                        <h1>Sign Up</h1>
                    </div>
                    <div className="gac__left__form">
                        <form className="login__signup__form" onSubmit={handleSignUp}>
                            <p>{errorMsg}</p>
                            <div className="ls_input_div">
                                <label>Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="gac_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="gac_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} className="gac_input" type="text"/>
                            </div>
                            <div className="ls_input_div">
                                <label>Location</label>
                                <input value={location} onChange={(e) => setLocation(e.target.value)} className="gac_input" type="text"/>
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
                                <button type="submit" className="signup_btn">Sign Up</button>
                                <h6>already signed up ?</h6>
                                <Link to="/guide/login"><button className="login_btn">Log in</button></Link>
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

export default GuideSignup