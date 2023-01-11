import React from "react";
import MobileBtn from "./MobileBtn";

export default function Header() {
    return (
        <div className="header">
            <h2 className="header__logo">baffet</h2>
            <div className="header__mobile">
                <nav className="header__nav">
                    <ul className="header__nav__items">
                        <li className="header__nav__item">
                            <a className="about">About Us</a>
                        </li>
                        <li className="header__nav__item blog">
                            <a>Blog</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__signing">
                    <ul className="header__signing__items">
                        <li className="header__signing__item in">
                            <a>Sign In</a>                    
                        </li>
                        <li className="header__signing__item up">
                            <a>Sign Up</a>                    
                        </li>
                    </ul>
                </div>
            </div>            
            <MobileBtn />
        </div>
        
    )
}