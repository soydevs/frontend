import React from 'react'
import { BsCircleFill } from "react-icons/bs";

import './PlaceReview.css'

const reviews = [
    {
        id: 1,
        image: 'https://avatars.githubusercontent.com/u/43471295?v=4',
        name: 'Jason Bourne',
        place: 'Kochi',
        rating: 1,
        reviewTitle: 'Excellent Spot',
        reviewDesc: "I think it's a one of the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony.. senhensier",
    },
    {
        id: 2,
        image: 'https://avatars.githubusercontent.com/u/43471295?v=4',
        name: 'Jason Bourne',
        place: 'Kochi',
        rating: 3,
        reviewTitle: 'Excellent Spot',
        reviewDesc: "I think it's a one of the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony. the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony. . senhensier",
    },
    {
        id: 3,
        image: 'https://avatars.githubusercontent.com/u/43471295?v=4',
        name: 'Jason Bourne',
        place: 'Kochi',
        rating: 4,
        reviewTitle: 'Excellent Spot',
        reviewDesc: "I think it's a one of the most best in quality earphone introduced in market Because I have already use earphones like boat headbass100 One more and like sony.. senhensier",
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


function PlaceReview() {

    return (
        <div className="placeReview">
            <h2>Reviews :</h2>

            <div className="reviews__container">
                {reviews.map(rev => (
                    <div className="reviewCard" key={rev.id}>
                        <div className="reviewCard__profile">
                            <img src={rev.image} alt="" />
                            <div className="reviewCard__profile__info">
                                <h4>{rev.name}</h4>
                                <p>{rev.place}</p>
                            </div>
                        </div>
                        {displayRating(rev.rating)}
                        <div className="reviewCard__content">
                            <h3>{rev.reviewTitle}</h3>
                            <p>{rev.reviewDesc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlaceReview
