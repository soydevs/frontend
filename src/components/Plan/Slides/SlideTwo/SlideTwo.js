import React, { useState } from 'react'

import { IoIosAdd, IoIosRemove } from "react-icons/io";

function SlideTwo() {

    const [days, setDays] = useState(0)
    const [nights, setNights] = useState(0)
    const [rooms, setRooms] = useState(0)

    return (
        <div className="slides">
            <div className="slide__content">
                <h1 className="slide__header">How long is your <span className="primary__span">stay</span></h1>
                <div className="slider_btns_container">
                    <div className="slider_btns">
                        <h5>Days</h5>
                        <div className="slider_btns_action">
                            <IoIosAdd className="slider_addBtn" onClick={() => setDays(days+1)}/>
                            <h4>{days}</h4>
                            <IoIosRemove className="slider_subtractBtn" onClick={() => setDays(days > 0 ? days-1 : 0)}/>
                        </div>
                    </div>
                    <div className="slider_btns">
                        <h5>Nights</h5>
                        <div className="slider_btns_action">
                            <IoIosAdd className="slider_addBtn" onClick={() => setNights(nights+1)}/>
                            <h4>{nights}</h4>
                            <IoIosRemove className="slider_subtractBtn" onClick={() => setNights(nights > 0 ? nights-1 : 0)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide__content slide_places">
                <h1 className="slide__header">How many <span className="primary__span">rooms</span> do you need</h1>
                <div className="slider_btns_container">
                    <div className="slider_btns">
                        <h5>Rooms</h5>
                        <div className="slider_btns_action">
                            <IoIosAdd className="slider_addBtn" onClick={() => setRooms(rooms+1)}/>
                            <h4>{rooms}</h4>
                            <IoIosRemove className="slider_subtractBtn" onClick={() => setRooms(rooms > 0 ? rooms-1 : 0)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideTwo
