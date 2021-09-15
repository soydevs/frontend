import React from 'react'

import './Trending.css'
import one from '../../../assets/png/trending/1.png'
import two from '../../../assets/png/trending/2.png'
import three from '../../../assets/png/trending/3.png'
import four from '../../../assets/png/trending/4.png'
import five from '../../../assets/png/trending/5.png'


const trending = [
    {
        id: 1,
        title: 'Kuttanad',
        subtitle: 'Backwater',
        image: one
    },
    {
        id: 2,
        title: 'Jaipur',
        subtitle: 'Ride',
        image: two
    },
    {
        id: 3,
        title: 'Agra',
        subtitle: 'Historic',
        image: three
    },
    {
        id: 4,
        title: 'Chennai',
        subtitle: 'Place',
        image: four
    },
    {
        id: 5,
        title: 'Rajasthan',
        subtitle: 'Place',
        image: five
    },
    
]

function Trending() {
    return (
        <div className="trending">
            <h1>Trending</h1>

            <div className="trending__container">
                {trending.map(exp => (
                    <div className="trendingCard" key={exp.id}>
                        <img src={exp.image} alt="" />
                        <h3>{exp.title}</h3>
                        <p>{exp.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending
