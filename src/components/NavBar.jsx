import React from "react"
import headerlogo from '../assets/header-logo.png'

const NavBar = ()=>{
    return (
        <nav className="Nav">
            <div className="header-div">
                <img src={headerlogo} alt="header-img"/>
                <h2>My Meme Generator</h2>
            </div>
            <h4>React Project</h4>
        </nav>
    )
}
export default NavBar