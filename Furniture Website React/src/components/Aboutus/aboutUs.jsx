import React from "react";
import Aboutimg from '../../images/a.jpg'

const AboutUs = () => {
    return(
        <>
           <div className="about-container">
      <div className="section-heading">
        <h5>About Us</h5>
        <p>Crafting comfort and elegance for every home.</p>
      </div>

      <div className="about-content">
        <img
          src={Aboutimg}
          alt="Furniture"
          className="about-image"
        />
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At FurniHome, we believe your home deserves furniture that blends beauty,
            comfort, and durability. Since our start in 2010, we’ve been delivering
            handcrafted wooden furniture made from the finest materials, combining
            traditional techniques with modern style.
            At FurniHome, we believe your home deserves furniture that blends beauty,
            comfort, and durability. Since our start in 2010, we’ve been delivering
            handcrafted wooden furniture made from the finest materials, combining
            traditional techniques with modern style.
          </p>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>Eco-Friendly Materials</h3>
          <p>
            We use sustainable wood and non-toxic finishes that are safe for your family and the planet.
          </p>
        </div>
        <div className="feature-card">
          <h3>Craftsmanship</h3>
          <p>
            Each piece is handcrafted by skilled artisans with years of experience in fine woodworking.
          </p>
        </div>
        <div className="feature-card">
          <h3>Custom Designs</h3>
          <p>
            Choose from a wide range of styles or work with us to create custom furniture that fits your space perfectly.
          </p>
        </div>
      </div>
    </div>
        </>
    )
}
export default AboutUs;