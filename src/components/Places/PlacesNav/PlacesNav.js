import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack, IoMdHeartEmpty } from "react-icons/io";

import './PlacesNav.css'

function PlacesNav({ place }) {
    return (
        <div className="placesNav">
            <Link to='/home'>
                <IoMdArrowBack className="placesNav__icon"/>
            </Link>
            <h1>{place}</h1>
            <IoMdHeartEmpty className="placesNav__icon"/>
        </div>
    )
}

export default PlacesNav
