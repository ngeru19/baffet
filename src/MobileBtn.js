import React from "react";
import "./App.css"

 
export default function Button() {

    const button = document.querySelector('.button');
    const handleClick = () => {
        const button = document.querySelector('.button');
        const isOpened = button.getAttribute('aria-expanded');
        if(isOpened === 'false') {
            button.setAttribute('aria-expanded', 'true');
        } else {
            button.setAttribute('aria-expanded', 'false');  
        }
}

    return (
        <div className="hamburger-button">
            <button className="button" 
                    aria-controls="primary-navigation" 
                    aria-expanded="false"
                    onClick={handleClick}
                    >
                <svg fill="var(--color_accent_two)" className="hamburger" viewBox="0 0 100 100" width='3em'>
                    <rect 
                    className="hamburger__line line__top" 
                        width={80} 
                        height={10}
                        x={10}
                        y={25}
                        rx={5}>
                    </rect>
                    <rect 
                    className="hamburger__line line__middle" 
                        width={80} 
                        height={10}
                        x={10}
                        y={45}
                        rx={5}>
                    </rect>
                    <rect 
                        className="hamburger__line line__bottom" 
                        width={80} 
                        height={10}
                        x={10}
                        y={65}
                        rx={5}>
                    </rect>
                </svg>
            </button>
        </div>
    )
} 