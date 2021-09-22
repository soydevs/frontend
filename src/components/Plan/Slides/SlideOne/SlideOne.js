import React, { useState } from 'react'

import '../Slides.css'

function SlideOne() {

    const [place, setPlace] = useState('')


    return (
        <div className="slides">
            <div className="slide__content">
                <h1 className="slide__header">Where are you planning to <span className="primary__span">visit</span></h1>

                <input value={place} onChange={(e) => setPlace(e.target.value)} type="text" placeholder="Eg. Fort Kochi" />
            </div>
            <div className="slide__hocontent">
                <h1 className="slide__header"><span className="primary__span">Hotels</span> available</h1>
            </div>
        </div>
    )
}

export default SlideOne
