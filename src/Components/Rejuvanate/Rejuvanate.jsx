import React from 'react';
import './Rejuvanate.css';
import data_product from '../Assets/Data'; 
import Item from '../Item/Item';

const Rejuvanate = () => {
  return (
    <div className='rejuvanate'>
      <h1>Rejuvanate</h1>
      <hr/>
      <div className='rejuvanate-item'>
          {data_product.map((item, i) => {
            return (
                   <div key={i} className='rejuvanate-image-container'>
                  <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                   </div>
                   );
          })} 
      </div>
    </div>
  );
};

export default Rejuvanate;