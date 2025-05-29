import React from 'react'
import { useCart } from '../../context/CartContext'

function Cart() {
   const Cart = useCart()
  return (
     <>
        <div className='Cart-section'>
            <div className='cart-and-checkout'>
              <div className='cart-card-main'>

              <div className='cart-card-heading'>
                <p>Img</p>
                <p>name</p>
                <p>price</p>
                <div className='quantity'>
                   <p>Quantity</p>
                </div>
                <p>✖</p>
              </div>

              {Cart.item.map((prev,index) =>
               <div className='cart-card' key={index}>
                <img src={prev.img}/>
                <p>{prev.name}</p>
                <p>{prev.price}</p>
                <div className='quantity'>
                   <button>-</button>
                   <p>{45}</p>
                   <button>+</button>
                </div>
                <div className='remove'>
                <button>✖</button>
                </div>
              </div>
              )} 
              </div>
              <div className='bill-checkout'>
                <div className='checkout'>
                   <div className='checkout-head'>
                     <p>Order summary</p>
                   </div>
                   <div className='checkout-info'>
                     <div className='info-detail'>
                        <p>Items</p>
                        <p>10</p>
                     </div>
                     <div className='info-detail'>
                        <p>Sub Total</p>
                        <p>10</p>
                     </div>
                     <div className='info-detail'>
                        <p>Shipping</p>
                        <p>Free</p>
                     </div>
                     <div className='info-detail'>
                        <p>Taxes</p>
                        <p>10</p>
                     </div>
                   </div>

                  <div className='total'>
                    <div className='info-detail'>
                        <p>Total</p>
                        <p>10</p>
                     </div>
                     <button>Proceed to Checkout</button>
                  </div>

                </div>
              </div>
            </div>
        </div>
     </>
  )
}

export default Cart
