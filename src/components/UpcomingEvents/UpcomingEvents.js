import React from 'react'

import './UpcomingEvents.css'


const events = [
    {
        id: 1,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    },
    {
        id: 2,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    },
    {
        id: 3,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    },
    {
        id: 4,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    }
]

function UpcomingEvents() {
    return (
        <div className="upcomingEvents">
            <h1>Upcoming Events</h1>

            <div className="upcomingEvents__container">
                {events.map(event => (
                    <div className="singleEvent" key={event.id}>
                        <img src={event.image} alt={event.name} />
                        <div className="singleEvent__content">
                            <h2>{event.name}</h2>
                            <h6>{event.date}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingEvents
