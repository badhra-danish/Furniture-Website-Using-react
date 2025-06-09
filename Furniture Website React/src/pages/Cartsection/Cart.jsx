import React from 'react'
import { useCart } from '../../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart() {
   const Cart = useCart();
   
   const Increment = (cartindex) => {
      Cart.setItem((prev) => prev.map((item, index) => index === cartindex ? { ...item, quantity: item.quantity + 1 } : item));
   };

   const Decrement = (cartindex) => {
      Cart.setItem((prev) => prev.map((item, index) => index === cartindex ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0));
   };

   const Remove = (cartindex) => {
      Cart.setItem((prev) => prev.filter((_, index) => index !== cartindex));
   };

   const TotalAmt = Cart.item.reduce((a, b) => a + b.price * (b.quantity || 1), 0);

   return (
      <>
         <div className='Cart-section'>
            <div className='section-heading'>
               <h5>Cart Section</h5>
               <p>lorem gsvdj dhsdshdsdsh sjdsjdjsdj sjdsjdjsdjs</p>
            </div>
            <div className='cart-and-checkout'>
               <div className='cart-card-main'>
                  {Cart.item.length > 0 ? (
                     <table className='cart-table'>
                        <thead>
                           <tr>
                              <th>Img</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Sub Price</th>
                              <th>Quantity</th>
                              <th>Remove</th>
                           </tr>
                        </thead>
                        <tbody>
                           {Cart.item.map((prev, index) => (
                              <tr key={index}>
                                 <td><img src={prev.img} alt={prev.name} style={{ width: '50px', height: '50px' }} /></td>
                                 <td>{prev.name}</td>
                                 <td>${prev.price}</td>
                                 <td>${prev.price * prev.quantity}</td>
                                 <td>
                                    <button onClick={() => Decrement(index)}>-</button>
                                    <span>{prev.quantity}</span>
                                    <button onClick={() => Increment(index)}>+</button>
                                 </td>
                                 <td>
                                    <button onClick={() => Remove(index)}>✖</button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  ) : (
                     <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', gap: '1rem', height: '50vh', fontSize: '1.2rem' }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <p>Cart is Empty</p>
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
   );
}

export default Cart;
