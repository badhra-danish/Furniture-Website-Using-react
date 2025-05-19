import React from "react";
import heroimg from '../../images/hero.png';

const HomeSection = () => {
    return(
        <>
           <div class="hero-main">
        <div class="hero-img">
            <img src={heroimg}/>
            <div class="hero-card-main">
                <div class="hero-card">
                    <h6>New Arrival</h6>
                    <p class="title">Discover Our New Collection</p>
                    <p class="card-content">Lorem ipsum dolor sit amet consecteLorem ipsum dolor sit amet consecte 
                        tur adipisicing elit Lorem ipsum dolor sit amet consecte.</p>
                    <button class="card-btn">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default HomeSection;