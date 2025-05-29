import React from "react";

import {Link} from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars,faXmark,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';

import { useCart } from "../../context/CartContext";


const Header = () => {
    const [isOpen,setIsopen] =useState(false)

    const cart = useCart()
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
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/services ">Service</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </nav>
            </div>
            <div className="cart">
              <Link to="/cart"><li><FontAwesomeIcon icon={faCartShopping}/></li></Link>
             
              {cart.item.length > 0 &&  <span>{cart.item.length}</span>}
            </div>
            <div className="bars">
              <button onClick={() => setIsopen(!isOpen)}>
                {isOpen?(<FontAwesomeIcon icon={faXmark}/>):(<FontAwesomeIcon icon={faBars}/>)}
              </button>
            </div>
            
        </div>
       </div>
    </div>
    <AnimatePresence>
    {isOpen && (
        <motion.div
         className='listitem'
         initial={{ opacity: 0, y: -400 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -400 }}
         transition={{ duration: 0.4 }}
         >
            <div className="navlistitem">
                    <li><Link to="/" onClick={() => setIsopen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsopen(false)}>About</Link></li>
                    <li><Link to="/services" onClick={() => setIsopen(false)}>Service</Link></li>
                    <li><Link to="/product" onClick={() => setIsopen(false)}>Product</Link></li>
                    <li><Link to="/gallery" onClick={() => setIsopen(false)}>Gallery</Link></li>
                    <li><Link to="/contact" onClick={() => setIsopen(false)}>Contact</Link></li>
            </div>   
        </motion.div>
    )}
    </AnimatePresence>
        </>
    )
}
export default Header;