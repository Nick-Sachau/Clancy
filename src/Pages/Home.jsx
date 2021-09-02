import React, { useState, useEffect } from 'react'
import { slides } from '../util/consts'

const Home = () => {
    const [slideNumber, setSlideNumber] = useState(0);

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
        <div className="slide">
            <h2>RV INSPECTION</h2>
            <div className={`slideImages`} >
                {slides.map((slide, index) => {
                    const { src, name } = slide;
                    let position = "nextSlide"

                    if(index === slideNumber) {
                        position = "activeSlide";
                    }

                    if(index === slideNumber - 1 || (slideNumber === 0 && index === slides.length - 1)){
                        position = "lastSlide"
                    }

                    return <img key={index} className={position} src={src} alt={name} />
                })}
            </div>
        </div>
    )
}

export default Home
