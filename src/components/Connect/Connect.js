import React from 'react'
import { Link } from 'react-router-dom'
import connect from '../../assets/svg/connect.svg'

import './Connect.css'

const users = [
    {
        id: 1,
        name: 'Jason',
        image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 2,
        name: 'Jason',
        image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 3,
        name: 'Jason',
        image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 4,
        name: 'Jason',
        image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 5,
        name: 'Jason',
        image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 6,
        name: 'Jason',
        image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 7,
        name: 'Jason',
        image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    
]

function Connect() {
    return (
        <div className="connect">
            <div className="connectImg">
                <img src={connect} alt="" />
            </div>
            <div className="connect_container">
                <h1><span className="primary__span">Connect</span> to Local Users</h1>
                <div className="users__container">
                    {users.map(user => (
                        <Link to={`/connect/${user.id}`} className="userCard" key={user.id}>
                            <img src={user.image} alt="" />
                            <h3>{user.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Connect
