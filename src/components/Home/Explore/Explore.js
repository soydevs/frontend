import React from 'react'

import camp from '../../../assets/svg/camp.svg'
import './Explore.css'


const explore = [
    {
        id: 1,
        title: 'Camp',
        image: camp
    },
    {
        id: 2,
        title: 'Camp',
        image: camp
    },
    {
        id: 3,
        title: 'Camp',
        image: camp
    },
    {
        id: 4,
        title: 'Camp',
        image: camp
    },
    {
        id: 5,
        title: 'Camp',
        image: camp
    },
    {
        id: 6,
        title: 'Camp',
        image: camp
    },
    {
        id: 7,
        title: 'Camp',
        image: camp
    },
    
]

function Explore() {
    return (
        <div className="explore">
            <h1>Explore Near Me</h1>

            <div className="explore__container">
                {explore.map(exp => (
                    <div className="exploreCard" key={exp.id}>
                        <img src={exp.image} alt="" />
                        <h3>{exp.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore
