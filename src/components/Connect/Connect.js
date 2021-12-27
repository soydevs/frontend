import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import connectUser   from '../../assets/svg/connectUser.svg'
import connectGuide   from '../../assets/svg/connectGuide.svg'
import sampleUserImg from '../../assets/jpg/sample.jpg';

import './Connect.css'

import requestHandler from '../../hooks/requestHandler'
import { AuthContext } from '../../context/AuthContext'

// const users = [
//     {
//         id: 1,
//         name: 'Jason',
//         image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//     },
//     {
//         id: 2,
//         name: 'Jason',
//         image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//     },
//     {
//         id: 3,
//         name: 'Jason',
//         image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//     },
//     {
//         id: 4,
//         name: 'Jason',
//         image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//     },
//     {
//         id: 5,
//         name: 'Jason',
//         image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//     },
//     {
//         id: 6,
//         name: 'Jason',
//         image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//     },
//     {
//         id: 7,
//         name: 'Jason',
//         image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//     },
    
// ]

function Connect({place}) {
    const { token } = useContext(AuthContext);

    const [location, setLocation]=useState(place)
    const [tab, setTab] = useState(1)
    const [guides, setGuides] = useState([])
    const [users, setUsers] = useState([])

    // const fallbackImg = 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'

    useEffect(()=>{
        if(!location)   return;
        Promise.all([
            requestHandler('GET','/api/guides/' + location), 
            requestHandler('GET', '/users/connect/' + location, undefined, token)]
        )
        .then((res) => {
            if(res[0].success) {
                setGuides(res[0].data.nearbyGuides)
            }
        
            if(res[1].success) {
                console.log(res[1].data.nearbyUsers)
                setUsers(res[1].data.nearbyUsers)
            }
            else {
                console.log("Server down!")
            }
        }).catch(e=>{
            console.log(e)
        })
    },[location, token])

    var loc = '';
    const handleSearch = () => {
        setLocation(loc);
    }

    return (
        <div className="connect">
            { location ? ( <>
            <div className="connectImg">
                <img src={tab === 1 ? connectGuide : connectUser} alt="" />
            </div>
            <div className="connectBtns__container">
                <button onClick={() => setTab(1)} className={`${tab === 1 ? 'selected' : 'not_selected'}`}>Guide</button>
                <button onClick={() => setTab(2)} className={`${tab === 2 ? 'selected' : 'not_selected'}`}>User</button>
            </div>
            <div className="connect_container">
                <h1>
                    <span className="primary__span">Connect</span> to 
                    {`${tab === 1 ? ' Guides' : ' Local Users'}`}
                </h1>
                <div className="users__container">
                    {tab === 1 ? guides.map(guide => (
                        <Link to={
                            {     
                                pathname: `/connect/${guide._id}`,
                                state:guide
                           }
                        } className="userCard" key={guide._id}>
                            <img src={guide.image} alt="" />
                            <h3>{guide.name}</h3>
                        </Link>
                    )) : users.map(user => (
                        <Link to={
                            {     
                                pathname: `/connect/${user._id}`,
                                state:user
                            }
                        } className="userCard" key={user._id}>
                            <img src={sampleUserImg} alt="" />
                            <h3>{user.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            </>):(
            <div className='connect__div'>
                <h1 className='connect__h1'>Where are you?</h1>
                <input className='connect__input' placeholder="Enter location" onChange={(e)=>{loc = e.target.value}} />
                <button className='connect__search__btn' onClick={handleSearch}>Search</button>
            </div>)
            }
        </div>
    )
}

export default Connect