
import React from "react";

function Header() {
    return(
        <div className="header">
            <h2 className="header__logo">baffet</h2>
            <nav className="header__nav">
                <a className="header__nav__link">About us</a>
                <a className="header__nav__link">Blog</a>
            </nav>
            <div className="header__signing">
                <a className="header__sign_in">Sign In</a>
                <a className="header__sign_up">Sign Up</a>    
            </div> 
        </div>
    )
}

export default Header 