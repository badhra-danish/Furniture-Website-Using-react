import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {  faEnvelope,faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons'


const ContactUs = () => {
    return(
        <>
  <div className="contact-container">
     <div className="section-heading"><h5>Contact Us</h5></div>
      

      <div className="contact-content">
        {/* Address Section */}
        <div className="contact-info">
        
          <h2>Our Address</h2>
           
          <p><FontAwesomeIcon icon={faLocationDot}/> : FurniHome Furniture Co.</p>
          <p>123 Comfort Street</p>
          <p>Woodland City, WL 45678</p>
          
          <p><FontAwesomeIcon icon={faEnvelope}/> : info@furnihome.com</p>
           
          <p><FontAwesomeIcon icon={faPhone}/> : +1 (555) 123-4567</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}
export default ContactUs;