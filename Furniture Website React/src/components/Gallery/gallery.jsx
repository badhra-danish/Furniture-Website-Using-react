import React from "react";
import dinningimg from "../../images/dinning.png";
import livingImg from "../../images/livingroom.png";
import bedroomImg from "../../images/bedroom.png";
import PurchaseSecureImg from "../../images/Purchase Securely.png";
import StyleRoomImg from "../../images/Style Your Room.png";
import ShipFromWareImg from "../../images/Ships From Warehouse.png";
const images = [
   dinningimg,
   livingImg,
   bedroomImg,
   PurchaseSecureImg,
   StyleRoomImg,
   ShipFromWareImg
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
export default Gallery