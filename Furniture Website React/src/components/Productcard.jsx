import React, { useState } from 'react'
import { useCart } from '../context/CartContext';

function Productcard({img , name ,price ,description ,quantity}) {
    const Cart = useCart()
    const [popup ,  setPopup] = useState('');
    const [popuptype , setPopupType] = useState('succsess')
    const AddtoCart = () => {
        const AllReadExist = Cart.item.some((prev) => prev.name === name)  
        if(AllReadExist){
            setPopup('Check Your Cart')
            setPopupType('error')
        }else{
            Cart.setItem([...Cart.item,{ img ,name,price,description,quantity:1}])
            setPopup('Item Added')
            setPopupType('succsess')
        }
        setTimeout(()=> setPopup(''),2000)
    }

 
    console.log(Cart.item);
    
  return (
    <>
        <div className='product-card'>
            <div className='card'>
                <img src={img}/>
                <p className='card-name'>{name}</p>
                <p>$ {price}</p>
                <p>{description}</p>
                <p>{quantity}</p>
                <button onClick={() => AddtoCart()}>Add To Cart</button>
          
                           {popup && <div style={{color:popuptype=='succsess' ? 'green':'red', textAlign:'center'}}> {popup}</div>}
            </div>
        </div>
    </>
  )
}

export default Productcard;
