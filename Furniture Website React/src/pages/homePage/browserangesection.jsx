import React from "react";
import dinningimg from "../../images/dinning.png";
import livingImg from "../../images/livingroom.png";
import bedroomImg from "../../images/bedroom.png";

const BrowseRangeSecton = () =>{
    return(
        <>
           <div class="browse-section-main">
    <div class="browse-section">
        <div class="section-heading">
            <h5>Browse The range</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="card-section">
            <div class="card">
                <img src={dinningimg} alt="dinning room"/>
                <p>Dinning</p>
            </div>
            <div class="card">
                <img src={livingImg} alt="dinning room"/>
                <p>Living</p>
            </div>
            <div class="card">
                <img src={bedroomImg} alt="dinning room"/>
                <p>Bedroom</p>
            </div>
        </div>
    </div>
   </div>
        </>
    )
}
export default BrowseRangeSecton