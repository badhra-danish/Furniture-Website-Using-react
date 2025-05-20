import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
            <div class="header-container">
      <div class="header">  
        <div class="navbar">
            <div class="logoname">
                <p>Furniture</p>
            </div>
            <div class="navlist">
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services  ">Service</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Conact</Link></li>
                </nav>
            </div>
        </div>
       </div>
    </div>
        </>
    )
}
export default Header;