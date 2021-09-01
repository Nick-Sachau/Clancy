import React, { useState, useEffect } from 'react'
import { slides } from '../util/consts'

const Home = () => {
    const [slideNumber, setSlideNumber] = useState(0);

    useEffect(() => {
        const x = setInterval((oldSlideNumber) => {
            switch (oldSlideNumber) {
                case 3:
                    setSlideNumber(1)
                    break;
                default:
                    setSlideNumber(slideNumber + 1)
                    break;
            }

        }, 1000);
        return (
            clearInterval(x)
        )
    }, [slideNumber])

    return (
        <div className="slide">
            <h2>RV INSPECTION</h2>
            <div className={`slideImages ${{ slideNumber }}`} >
                {slides.map((slide, index) => {
                    const { src, name } = slide;
                    let position = "activeSlide"

                    if(index === slideNumber) {
                        position = "activeSlide";
                    }

                    if(index === slideNumber + 1 || (index === 0 && slideNumber === slide.length - 1)){
                        position = "nextSlide"
                    }
                    if(index < slideNumber){
                        position = "lastSlide"
                    }

                    return <img className={position} src={src} alt={name} />
                })}
            </div>
        </div>
    )
}

export default Home
