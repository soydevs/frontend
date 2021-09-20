import React from 'react'

import './ConnectProfile.css'

function ConnectProfile() {

    const name = 'Ousep'
    const email = 'ousepkayamkulam@gmail.com'
    const location = 'location'
    const language = 'Malayalam'
    const phone = '123-456-123'
    const address = '12/43E, Rajappan House, Fort Kochi, Ernakulam, Kerala.'

    return (
        <div className="connectProfile">
            <div className="connectProfile__header">
                <div className="connectProfile__header__info">
                    <div className="phi_img">
                        <img src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                    </div>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>
            </div>
            <div className="connectProfile__body">
                <div className="profile_body_details">
                    <label>Location</label>
                    <div className="profile_input_container">
                        <input disabled value={location || ''} type="text" className="connectProfile_input"/>
                    </div>
                </div>
                <div className="profile_body_details">
                    <label>Language</label>
                    <div className="profile_input_container">
                        <input disabled value={language || ''} type="text" className="connectProfile_input"/>
                    </div>
                </div>
                <div className="profile_body_details">
                    <label>Phone</label>
                    <div className="profile_input_container">
                        <input disabled value={phone || ''} type="text" className="connectProfile_input"/>
                    </div>
                </div>
                <div className="profile_body_details" style={{alignItems: 'flex-start'}}>
                    <label>Address</label>
                    <div className="profile_input_container">
                        <textarea disabled value={address || ''}  type="text" className="connectProfile_input" style={{height: 90}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectProfile
