import React from "react";

import {Link} from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";




const Header = () => {
    const [isOpen,setIsopen] =useState(false)
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
            <div className="bars">
            <button onClick={() => setIsopen(!isOpen)}>
             {isOpen?(<FontAwesomeIcon icon={faXmark}/>):(<FontAwesomeIcon icon={faBars}/>)}
            </button>
            </div>
            
        </div>
       </div>
    </div>
    {isOpen && (
        <div className="listitem">
            <div className="navlistitem">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services  ">Service</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Conact</Link></li>
            </div>   
        </div>
    )}
        </>
    )
}
export default Header;