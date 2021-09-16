import React from 'react'
import { BsCircleFill } from "react-icons/bs";

import './PlaceHotels.css'
import one from '../../../assets/png/trending/1.png'
import two from '../../../assets/png/trending/2.png'
import three from '../../../assets/png/trending/3.png'
import four from '../../../assets/png/trending/4.png'
import five from '../../../assets/png/trending/5.png'


const hotels = [
    {
        id: 1,
        title: 'Thattukada',
        rating: 3,
        image: one
    },
    {
        id: 2,
        title: 'KSRTC Hotel',
        rating: 4,
        image: two
    },
    {
        id: 3,
        title: 'Shaap',
        rating: 3,
        image: three
    },
    {
        id: 4,
        title: 'Thakkaram',
        rating: 5,
        image: four
    },
    {
        id: 5,
        title: 'Paragon',
        rating: 2,
        image: five
    },
    
]


const displayRating = (n) => {
    return (
        <div className="rating__container">
            {
                [...Array(n)].map((rat, id) => (
                    <BsCircleFill key={id} className="rating_icon"/>
                ))
            }
                            {
                [...Array(5-n)].map((rat, id) => (
                    <BsCircleFill key={id} className="rating_icon_grey"/>
                ))
            }
        </div>
    )
}

function PlaceHotels() {
    return (
        <div className="placeHotels">
            <h1><span className="blue__span">Hotels</span> near here</h1>

            <div className="placeHotels__container">
                {hotels.map(htl => (
                    <div className="hotelsCard" key={htl.id}>
                        <img src={htl.image} alt="" />
                        <h3>{htl.title}</h3>
                        {displayRating(htl.rating)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlaceHotels
