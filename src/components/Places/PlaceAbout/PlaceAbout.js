import React from 'react'

import './PlaceAbout.css'

function PlaceAbout({intro, images}) {

    function imageExists(url){

        var image = new Image();
    
        image.src = url;
    
        if (!image.complete) {
            return false;
        }
        else if (image.height === 0) {
            return false;
        }
    
        return true;
    }
    
    const fallback = 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    
    return (
        <div className="placeAbout">
            {images && images.map((i, index)=>{
            if(index === images.length-1)
                return <img key={i.url} src={imageExists(i.url) ? i.url : fallback} alt={i.title ? i.title:''} />
            return <div key={index}></div>
            }
            )}
            <div className="placeAbout__overview">
                <h2>Overview :</h2>
                <p>
                    {intro}
                </p>
            </div>
        </div>
    )
}

export default PlaceAbout
