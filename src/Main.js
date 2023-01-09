import React from "react";
import CarouselAlt from "./CarouselAlt"; 

export default function Main() {
    return (
        <div className="main">
            <div className="main__info">
                <h2 className="main__info__title"><span className="accent">Your wealth</span> starts here</h2>
                <h3 className="main__info__subtitle">Wealth management with confidence and experience</h3>
                <a className="main__cta">Start my plan</a>
            </div>
            <div className="main__carousel">
                <CarouselAlt />
            </div>       
        </div>
    )
}