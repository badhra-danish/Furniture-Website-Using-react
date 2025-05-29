import React from "react";
import dinningimg from "../../images/dinning.png";
import livingImg from "../../images/livingroom.png";
import bedroomImg from "../../images/bedroom.png";
import abt1 from '../../images/about1.jpg'
import abt2 from '../../images/about2.jpg'
import abt3 from '../../images/about3.jpg'
import abt4 from '../../images/about4.png'
const images = [
   dinningimg,
   livingImg,
   bedroomImg,
   abt1,
   abt2,
   abt3,
   abt4
]

const Gallery = () =>{
    return(
        <>
          <div className="gallery-container">
            <div className="section-heading">
             <h5>Our Furniture Gallery</h5>
              <p>
                 Explore our latest designs and handcrafted furniture pieces.
              </p>
            </div>
      
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Furniture ${index + 1}`} />
          </div>     
        ))}
      </div>
    </div>
        </>
    )
}
export default Gallery;