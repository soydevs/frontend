import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Layout, PlacesNav, PlaceAbout, PlaceReview, PlaceHotels } from '../../components'

import './PlacePage.css'

function PlacePage() {

    const [tab, setTab] = useState(1)

    const query = useParams()
    const place = query.id

    return (
        <Layout>
            <PlacesNav place={place}/>
            <div className="placesPage__btn_container">
                <button onClick={() => setTab(1)} className={`${tab === 1 ? 'selected' : 'not_selected'}`}>About</button>
                <button onClick={() => setTab(2)} className={`${tab === 2 ? 'selected' : 'not_selected'}`}>More Info</button>
                <button onClick={() => setTab(3)} className={`${tab === 3 ? 'selected' : 'not_selected'}`}>Weather</button>
                <button onClick={() => setTab(4)} className={`${tab === 4 ? 'selected' : 'not_selected'}`}>Fun Facts</button>
            </div>
            <div className="placeTab__container">
                <PlaceAbout />
                <PlaceReview />
                <PlaceHotels />
            </div>
        </Layout>
    )
}

export default PlacePage