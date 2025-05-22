import React from "react";

const UserFeedBackCard = ({name,img,msg,rating}) => {
    const maxstar = 5;
    return(
        <>
           <div className="user-feedback-card">
              <img src={img}/>
              <h5>{name}</h5>
              <p>{msg}</p>
              <div className="star" style={{color:'gold',fontSize:'1.2rem', marginBottom:'1rem'}}>
                {Array.from({length: maxstar}, (_,i) => (
                    <span key={i}>
                       {i < rating ? '★' : '☆'}
                    </span>
                ))}
              </div>    
           </div>
        </>
    )
}
export default UserFeedBackCard;