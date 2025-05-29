import React from 'react'
import { useCart } from '../context/CartContext';

function Productcard({img , name ,price ,description ,quantity}) {
    const Cart = useCart()

    const AddtoCart = () => {
        Cart.setItem([...Cart.item,{ img ,name,price,description}])
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
                <button onClick={() => AddtoCart()}>Add To Cart</button>
            </div>
        </div>
    </>
  )
}

export default Productcard;
