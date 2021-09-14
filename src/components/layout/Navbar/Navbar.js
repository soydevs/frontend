import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar--container">
                <h2>Logo</h2>

                <div className="nav_btn_container">
                    <Link to="/login">
                        <button className="navBtn nav_login">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="navBtn nav_signup">Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar