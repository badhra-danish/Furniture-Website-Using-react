import React from "react";
import Freedeleiveryship from '@mui/icons-material/Home';
import Supporticon from '@mui/icons-material/Cached';
import Authenticicon from '@mui/icons-material/Shield'
const AuthenticSction = () => {
    return(
        <>
           <div class="authentic-icon-main">
        <div class="authentic-icon">
            <div class="icon-card">
                <div class="icon">
                    <Freedeleiveryship/>
                </div>
                <div class="icon-name">
                    <p class="name">Free Delivery</p>
                    <p class="msg">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div class="icon-card">
                <div class="icon">
                   <Supporticon/>
                </div>
                <div class="icon-name">
                    <p class="name">Support 24/7</p>
                    <p class="msg">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div class="icon-card">
                <div class="icon">
                 <Authenticicon/>
                </div>
                <div class="icon-name">
                    <p class="name">100% Authentic</p>
                    <p class="msg">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

        </div>
    </div>
        </>
    )
}
export default AuthenticSction;