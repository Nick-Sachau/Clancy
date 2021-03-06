import React, { useState, useEffect } from 'react'
import { slides } from '../util/consts'
import { Link } from "react-router-dom";

const Home = () => {
    const [slideNumber, setSlideNumber] = useState(0);

    const nextPicture = () => {
        setSlideNumber(slideNumber + 1)
    }

    const prevPicture = () => {
        setSlideNumber(slideNumber - 1)
    }

    useEffect(() => {
        const x = setInterval(() => {
            switch (slideNumber) {
                case 2:
                    setSlideNumber(0)
                    break;
                default:
                    setSlideNumber(slideNumber + 1)
                    break;
            }

        }, 4000);
        return (
            setTimeout(() => {
                clearInterval(x)
            }, 4000)
        )
    }, [slideNumber])

    return (
        <>

            <div className="slide">
                <div className="overlay">
                    <div className="inner-overlay">
                        <h1><span>BRIGGS</span><br /> RV SERVICES</h1>
                        <h3>"Officia dolor proident et ex tempor commodo nostrud."</h3>
                        <h3>Clancy Briggs</h3>
                        <h3><Link to='/services'>What We Offer</Link></h3>
                    </div>
                </div>
                <div className={`slideImages`} >
                    {slides.map((slide, index) => {
                        const { src, name } = slide;
                        let position = "nextSlide"

                        if (index === slideNumber) {
                            position = "activeSlide";
                        }

                        if (index === slideNumber - 1 || (slideNumber === 0 && index === slides.length - 1)) {
                            position = "lastSlide"
                        }

                        return <img key={index} className={position} src={src} alt={name} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
