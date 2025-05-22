import React from "react";
import Freedeleiveryship from '@mui/icons-material/Home';
import Supporticon from '@mui/icons-material/Cached';
import Authenticicon from '@mui/icons-material/Shield'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast,faArrowsRotate,faShieldHalved } from "@fortawesome/free-solid-svg-icons";
const AuthenticSction = () => {
    return(
        <>
           <div class="authentic-icon-main">
        <div class="authentic-icon">
            <div class="icon-card">
                <div class="icon">
                    <FontAwesomeIcon icon={faTruckFast}/>
                </div>
                <div class="icon-name">
                    <p class="name">Free Delivery</p>
                    <p class="msg">Fast And Free Shipping.</p>
                </div>
            </div>

            <div class="icon-card">
                <div class="icon">
                   <FontAwesomeIcon icon={faArrowsRotate}/>
                </div>
                <div class="icon-name">
                    <p class="name">Support 24/7</p>
                    <p class="msg">24/7 Support All Time.</p>
                </div>
            </div>

            <div class="icon-card">
                <div class="icon">
                <FontAwesomeIcon icon={faShieldHalved}/>
                </div>
                <div class="icon-name">
                    <p class="name">100% Authentic</p>
                    <p class="msg">100% Authentic And Secure.</p>
                </div>
            </div>

        </div>
    </div>
        </>
    )
}
export default AuthenticSction;