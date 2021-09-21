import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Layout, PlacesNav, PlaceAbout, PlaceReview, PlaceHotels, Weather } from '../../components'
import requestHandler from '../../hooks/requestHandler'

import './PlacePage.css'

function PlacePage() {

    const [tab, setTab] = useState(1)

    const { place } = useParams()

    const [intro, setIntro] = useState('No info available!') // eslint-disable-next-line
    const [info, setInfo] = useState('No info available!')
    const [table, setTable] = useState('No info available!')
    const [reviews, setReviews] = useState([])
    const [images, setImages] = useState([{url:'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}])

    useEffect(()=>{
        requestHandler('GET','/api/details/' + place).then(response => {
            if(response.success) {
                console.log(response)
                setIntro(response.data.introDetails ? response.data.introDetails : 'No info available!')
                setInfo(response.data.infoDetails ? response.data.infoDetails : 'No info available!')
                setTable(response.data.tableDetails ? response.data.tableDetails : 'No info available!')
                setReviews(response.data.reviews ? response.data.reviews : [])
                setImages(response.data.imageDetails ? response.data.imageDetails : [{url:'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}])
            }
            else {
                //console.log(response)
                console.log("Data not available!")
            }
        })
    },[place])

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
                {tab === 1 && (
                <>
                    <PlaceAbout intro={intro} images={images}/>
                    <PlaceReview reviews={reviews}/>
                    <PlaceHotels/>
                </>
                )}
                {tab === 2 && (
                    // info && info.imageCaption.map(i=>{
                    //     return(<h3 key={i}>{i}</h3>);
                    // })
                    <h1>info</h1>                                   
                )}
                {tab === 3 && (
                    <Weather />
                )}
                {tab === 4 && (
                    <h1>Fun facts: {table ? table : ''}</h1>
                )}

            </div>
        </Layout>
    )
}

export default PlacePage
