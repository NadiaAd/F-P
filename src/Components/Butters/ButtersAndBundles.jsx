import React from 'react';
import './ButtersAndBundles.css'
import All_Butters from '../Assets/Butters';
import Item from '../Item/Item';

const AllButters = () => {
  return (
    <div className='butters'>
       <h1>Butters & Bundles </h1>
        <hr />
        <div className='butter'>
                 {All_Butters.map((item, i) => {
                   return (
                   <div key={i} className='butter-image-container'>
                   <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                   </div>
                           );
          })} 
            </div>
        </div>
    
  );
};

export default AllButters;