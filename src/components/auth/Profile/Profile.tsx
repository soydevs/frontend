import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'

import { HiPencil, HiOutlineUserCircle, HiOutlineCake, HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import './Profile.css'
import { AuthContext } from '../../../context/AuthContext'

export interface User {
    name: string,
    phone: string,
    birthdate?: string,
    email?: string,
    location?: string,
}
function Profile() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')

    const [user, setUser] = useState<User>({name: '', phone: '', email: ''})
    const { token} = useContext(AuthContext);

    console.log(token)

    const fetchData = async () => {
        const URL = process.env.REACT_APP_BASE_URL + '/users';
        try {// eslint-disable-next-line
            const res = await axios.get(URL,  {headers: { 'Authorization': `Bearer ${token}` }})

            console.log(res.data)
            setUser(res.data)
            setName(user.name && user.name)
            setPhone(user.phone)
            setEmail(user.email && user.email)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        fetchData()

    }, [])


    return (
        <div className="profile">
            <div className="profile__header">
                <div className="profile__header__info">
                    <div className="phi_img">
                        <img src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                    </div>
                    <h1>Jane Doe</h1>
                    <p>janedoe@gmail.com</p>
                </div>
            </div>
            <div className="profile__body">
                <div className="profile_body_details">
                    <label>Name</label>
                    <div className="profile_input_container">
                        <HiOutlineUserCircle className="profile__input_icon"/>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Location</label>
                    <div className="profile_input_container">
                        <HiOutlineLocationMarker className="profile__input_icon"/>
                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Birthdate</label>
                    <div className="profile_input_container">
                        <HiOutlineCake className="profile__input_icon"/>
                        <input value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Phone</label>
                    <div className="profile_input_container">
                        <HiOutlinePhone className="profile__input_icon"/>
                        <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
                <div className="profile_body_details">
                    <label>Email</label>
                    <div className="profile_input_container">
                        <HiOutlineMail className="profile__input_icon"/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="profile_input"/>
                    </div>
                    <HiPencil className="edit__profile"/>
                </div>
            </div>
        </div>
    )
}

export default Profile
