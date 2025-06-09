import React from 'react';
import Productcard from '../../components/Productcard';
import ProductImg from '../../images/dinning.png'
import TableImg from '../../images/table.jpg'
import Chair from  '../../images/chair.jpg'
import Bed from '../../images/bed.jpg'
import HandleImg from '../../images/handle.jpg'
import sofaImg from '../../images/about2.jpg';
import PlyWoodimg from '../../images/plywood.jpg'
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
                 img={TableImg}
                 name={'Table'}
                 price={12200}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={Chair}
                 name={'Chair'}
                 price={3000}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={Bed}
                 name={'Bed'}
                 price={10200}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={HandleImg}
                 name={'Handle'}
                 price={800}
                 description={'jxncznxjjx hbchzbx'}
                 />

<Productcard 
                 img={PlyWoodimg}
                 name={'PlyWood'}
                 price={2500}
                 description={'jxncznxjjx hbchzbx'}
                 />
                 <Productcard 
                 img={sofaImg}
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
