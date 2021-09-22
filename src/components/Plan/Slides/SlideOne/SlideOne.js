import React, { useState } from 'react'
import Select from 'react-select';

import { displayRating } from '../../../../utils/rating'
import '../Slides.css'
import one from '../../../../assets/png/trending/1.png'

const placeOptions = [
    {
        value : 'green',
        label : 'green'
    },
    {
        value : 'red',
        label : 'red'
    },
]

const hotels = [
    {
        id: 1,
        title: 'Thattukada',
        rating: 3,
        image: one
    },
    {
        id: 2,
        title: 'KSRTC Hotel',
        rating: 4,
        image: one
    },
    {
        id: 3,
        title: 'Shaap',
        rating: 3,
        image: one
    },
]

const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: '100%',
      borderBottom: '1px dotted pink',
      color: '#F6503B',
      backgroundColor: '#FEE9E7',
      padding: 0,
      borderRadius: 8
    }),
    menuList: (provided, state) => ({
        ...provided,
        borderRadius: 8
      }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#F6503B',
    }),
    clearIndicator: (provided, state) => ({
        ...provided,
        color: '#F6503B',
    }),
  }

function SlideOne() {

    const [place, setPlace] = useState('')
    const [hotel, setHotel] = useState(1)

    const chooseHotel = (id) => {
        setHotel(id)
        console.log(id)
    }

    const handlePlace = (e) => {
        if(e) {
            setPlace(e.value)
        }
    }

    console.log(place)


    return (
        <div className="slides">
            <div className="slide__content">
                <h1 className="slide__header">Where are you planning to <span className="primary__span">visit</span></h1>
                <Select
                    styles={customStyles}
                    className="slide_visit_input"
                    placeholder="Eg. Fort Kochi"
                    isDisabled={false}
                    isLoading={false}
                    isClearable={true}
                    isRtl={false}
                    isSearchable={true}
                    name="place"
                    options={placeOptions}
                    onChange={handlePlace} 
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: ' #fcbbb6',
                          primary50: '#F29184',
                          primary: '#F6503B',
                        },
                    })}
                />
            </div>
            <div className="slide__content slide_places">
                <h1 className="slide__header"><span className="primary__span">Hotels</span> available</h1>
                <div className="slideHotels__container">
                    {hotels.map(htl => (
                        <div 
                            className="hotelsCard" 
                            key={htl.id} 
                            onClick={() => chooseHotel(htl.id)}
                            style={{transform: htl.id === hotel ? 'scale(0.9)' : 'scale(0.8)', boxShadow: htl.id === hotel ? '5px 5px 10px #00000060, -5px -5px 10px #ffffff40' : 'none'}}
                        >
                            <img src={htl.image} alt="" />
                            <h3>{htl.title}</h3>
                            {displayRating(htl.rating)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SlideOne
