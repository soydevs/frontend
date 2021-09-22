import React from 'react'

import './Landing.css'


function Landing() {
    return (
        <div className="landing">
            <h1>Search for your <span className="primary__span">favourite</span> place </h1>
            <div className="landing__container">
                <div className="train__container">
                    <div className="landing_input_div">
                        <input type="text" className="landing_input" placeholder="Eg. Edapally"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
