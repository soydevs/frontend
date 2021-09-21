import React, { useRef, useState } from 'react'
import Slider from "react-slick";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import './PlanSlider.css'

function PlanSlider() {
    const [slide, setSlide] = useState(1)
    const sliderRef = useRef();

    const settings = {
        dots: false,
        adaptiveHeight: true,
        infinite: false,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        margin: 3,
        loop: true,
        draggable: false,
        swipeToSlide: false,
        swipe: false,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
        setSlide(slide + 1);
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
        setSlide(slide - 1);
    }

    return (
        <div className="planSlider">
            <div className="planSlider__container">
                <div className="planSlider">
                    <Slider {...settings} ref={sliderRef}>
                        <div>
                            <h1>Slide 1</h1>
                        </div>
                        <div>
                            <h1>Slide 2</h1>
                        </div>
                        <div>
                            <h1>Slide 3</h1>
                        </div>
                        <div>
                            <h1>Slide 4</h1>
                        </div>
                    </Slider>
                </div>
                <div className="resumeSlider_Buttons" style={{justifyContent: slide === 1 ? 'flex-end' : 'space-between'}} >
                    <button onClick={gotoPrev} style={{display: slide === 1 ? 'none' : 'inline-block'}}>
                        <IoArrowBack className="prevButton"/>
                    </button>
                    <button onClick={gotoNext} style={{display: slide === 4 ? 'none' : 'inline-block'}}>
                        <IoArrowForward className="nextButton" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlanSlider
