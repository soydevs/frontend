import React, { useRef, useState } from 'react'
import Slider from "react-slick";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdDone } from "react-icons/md";

import './PlanSlider.css'
import SlideOne from '../Slides/SlideOne/SlideOne';
import SlideTwo from '../Slides/SlideTwo/SlideTwo';
import SlideThree from '../Slides/SlideThree/SlideThree';
import SlideFour from '../Slides/SlideFour/SlideFour';



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

    const resetPlanner = () => {
        setSlide(1);
        sliderRef.current.slickGoTo(0);
    }

    return (
        <div className="planSlider">
            <div className="planSlider__container">
                <div className="planSliderDiv">
                    <Slider {...settings} ref={sliderRef}>
                        <div>
                            <SlideOne />
                        </div>
                        <div>
                            <SlideTwo />
                        </div>
                        <div>
                            <SlideThree />
                        </div>
                        <div>
                            <SlideFour />
                        </div>
                    </Slider>
                </div>
                <div className="slider_Buttons" style={{justifyContent: slide === 1 ? 'flex-end' : 'space-between'}} >
                    <button onClick={gotoPrev} style={{display: slide === 1 ? 'none' : 'inline-block'}}>
                        <IoArrowBack className="prevButton"/>
                    </button>
                    <button onClick={gotoNext} style={{display: slide === 4 ? 'none' : 'inline-block'}}>
                        <IoArrowForward className="nextButton" />
                    </button>
                    <button onClick={resetPlanner} style={{display: slide === 4 ? 'inline-block' : 'none'}}>
                        <MdDone className="nextButton" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlanSlider
