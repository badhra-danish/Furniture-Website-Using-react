import React from "react";
import PurchaseSecureImg from "../../images/Purchase Securely.png";
import StyleRoomImg from "../../images/Style Your Room.png";
import ShipFromWareImg from "../../images/Ships From Warehouse.png";
const HowItsWorkSection = () => {
    return(
        <>
           <div class="howitswork-section-main">
    <div class="howitswork-section">
        <div class="section-heading">
            <h5>How  Its Works</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="howitswork-card-section">
            <div class="howitswork-card">
                <img src={PurchaseSecureImg} alt="purchasesecurely"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div class="howitswork-card">
                <img src={ShipFromWareImg} alt="ship from ware house"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div class="howitswork-card">
                <img src={StyleRoomImg} alt="style your room"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
        </div>
    </div>
   </div>
        </>
    )
}
export default HowItsWorkSection