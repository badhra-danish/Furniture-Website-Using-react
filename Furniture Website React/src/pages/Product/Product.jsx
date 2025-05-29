import React from 'react';
import Productcard from '../../components/Productcard';
import ProductImg from '../../images/dinning.png'
function Product() {
  return (
   <>
      <div className='product-section-main'>
         <div className='product-section'>
            <div className='section-heading'>
                <h5>What You Want</h5>
                <p>lorem hdfbdf jdbbdhf dfhdnnd jsncjsn</p>
            </div>
            
            <div className='product-card-section'>
               <Productcard 
                 img={ProductImg}
                 name={'Table'}
                 price={12200}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={ProductImg}
                 name={'Chair'}
                 price={3000}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={ProductImg}
                 name={'Bed'}
                 price={10200}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={ProductImg}
                 name={'Handle'}
                 price={800}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={ProductImg}
                 name={'PlyWood'}
                 price={2500}
                 description={'jxncznxjjx hbchzbx'}
                 />
                 <Productcard 
                 img={ProductImg}
                 name={'Sofa'}
                 price={5000}
                 description={'jxncznxjjx hbchzbx'}
                 />
            </div>
         
         </div>
      </div>

   </>
  )
}

export default Product
