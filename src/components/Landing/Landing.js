import React from 'react'

import './Landing.css'

import train from '../../assets/svg/train.svg'

function Landing() {
    return (
        <div className="landing">
            <h1>Search for your <span className="blue__span">favourite</span> place </h1>
            <div className="landing__container">
                <div className="train__container">
                    <div className="landing_input_div">
                        <input type="text" className="landing_input" placeholder="Eg. Edapally"/>
                    </div>
                    <img src={train} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Landing
