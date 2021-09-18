import React from 'react'
import { BsCircleFill } from "react-icons/bs";

import './PlaceReview.css'

// const reviews = [
//     {
//         id: 1,
//         image: 'https://avatars.githubusercontent.com/u/43471295?v=4',
//         author: 'Jason Bourne',
//         location: 'Kochi',
//         rating: 1,
//         title: 'Excellent Spot',
//         text: "I think it's a one of the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony.. senhensier",
//     },
//     {
//         id: 2,
//         image: 'https://avatars.githubusercontent.com/u/43471295?v=4',
//         author: 'Jason Bourne',
//         location: 'Kochi',
//         rating: 3,
//         title: 'Excellent Spot',
//         text: "I think it's a one of the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony. the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony. . senhensier",
//     },
//     {
//         id: 3,
//         image: 'https://avatars.githubusercontent.com/u/43471295?v=4',
//         author: 'Jason Bourne',
//         location: 'Kochi',
//         rating: 4,
//         title: 'Excellent Spot',
//         text: "I think it's a one of the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony.. senhensier",
//     },

// ]

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


function PlaceReview({reviews}) {
    return (
        <div className="placeReview">
            <h2>Reviews :</h2>

            <div className="reviews__container">
                {reviews.length > 0 ? '': <p className="placeReview">No reviews yet!</p>}
                {reviews && reviews.map(rev => (
                    <div className="reviewCard" key={rev.id}>
                        <div className="reviewCard__profile">
                            <img src={rev.image} alt="" />
                            <div className="reviewCard__profile__info">
                                <h4>{rev.author}</h4>
                                <p>{rev.location}</p>
                            </div>
                        </div>
                        {displayRating(rev.rating)}
                        <div className="reviewCard__content">
                            <h3>{rev.title}</h3>
                            <p>{rev.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlaceReview
