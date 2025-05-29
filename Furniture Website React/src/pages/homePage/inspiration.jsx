import React from "react";
import InspirationImg from '../../images/inspiration.png'

const InspirationSection = () => {
    return(
        <>
            <div class="inspiration-section-main">
      <div class="inspiration-section">
        <div class="section-heading">
            <h5>Inspiration Collection</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div class="inspiration-card">
            <div class="card">
                <img src={InspirationImg} alt="Inspiration image"/>
            </div>
        </div>
      </div>
   </div>

        </>
    )
}
export default InspirationSection;