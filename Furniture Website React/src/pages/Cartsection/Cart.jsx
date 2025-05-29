import React from 'react'
import { useCart } from '../../context/CartContext'

function Cart() {
   const Cart = useCart()
   
   const Increment = (cartindex) => {
      Cart.setItem((prev) => prev.map((item,index) => index == cartindex ? {...item , quantity:item.quantity+1}:item))
   }

   const Decrement = (cartindex) => {
      Cart.setItem((prev) => prev.map((item,index) => index == cartindex ? {...item , quantity:item.quantity-1}:item).filter((item) => item.quantity > 0))
   }

   const Remove = (cartindex) => {
      Cart.setItem((prev) => prev.filter((_,index) => index != cartindex))
   }
   const TotalAmt = Cart.item.reduce((a,b) => a + b.price*(b.quantity || 1)  ,0)
  return (
     <>
        <div className='Cart-section'>
            <div className='cart-and-checkout'>
              <div className='cart-card-main'>

              <div className='cart-card-heading'>
                <p>Img</p>
                <p>name</p>
                <p>price</p>
                <p>sub Price</p>
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
                <p>{prev.price * prev.quantity}</p>
                <div className='quantity'>
                   <button onClick={() => Decrement(index)}>-</button>
                   <p>{prev.quantity}</p>
                   <button onClick={() => Increment(index)}>+</button>
                </div>
                <div className='remove'>
                <button onClick={() => Remove(index)}>✖</button>
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
                        <p>{Cart.item.length}</p>
                     </div>
                     <div className='info-detail'>
                        <p>Sub Total</p>
                        <p>$ {TotalAmt}.00</p>
                     </div>
                     <div className='info-detail'>
                        <p>Shipping</p>
                        <p>Free</p>
                     </div>
                     <div className='info-detail'>
                        <p>Taxes</p>
                        <p>$ 00.00</p>
                     </div>
                   </div>

                  <div className='total'>
                    <div className='info-detail'>
                        <p>Total</p>
                        <p>$ {TotalAmt}.00</p>
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
