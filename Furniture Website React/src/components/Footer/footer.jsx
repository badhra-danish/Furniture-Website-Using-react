import React from "react";
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return(
        <>
            <footer>
        <div class="footer-section">
            <div class="footer-content">
              <div class="footer-left-part">
                <div class="footer-logo">
                    <h2>Furniture.  </h2>
                    <p>&copy Furniture Pvt Ltd.</p>
                </div>
                <div class="followus-part">
                    <p>Follow Us</p>
                    <div class="followus-icon">
                        <div class="icon">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div class="icon">
                        <FontAwesomeIcon icon={faFacebook}/>
                        </div>
                        <div class="icon">
                        <FontAwesomeIcon icon={faSquareXTwitter}/>
                        </div>
                    </div>
                </div>
              </div>  
              <div class="footer-right-part">
                <div class="footer-list">
                    <h2>Company</h2>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services  ">Service</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h2>product</h2>
                    <ul>
                        <li>Sofa</li>
                        <li>Bed</li>
                        <li>Chair</li>
                        <li>Luxury</li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h2>Help</h2>
                    <ul>
                        <li>24/7 support</li>
                        <li>Term and condition</li>
                        <li>Get support</li>
                        <li>Web Privacy</li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h2>product</h2>
                    <ul>
                        <li>Sofa</li>
                        <li>Bed</li>
                        <li>Chair</li>
                        <li>Luxury</li>
                    </ul>
                </div>
              </div> 
            </div>
        </div>
      </footer>
        </>
    )
}
export default Footer