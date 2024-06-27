import React from 'react';
import './Scrubs.css'
import Item from '../Item/Item';
import All_Scrubs from '../Assets/Scrubs';

const AllScrubs = () => {
  return (
    <div className='scrubs'>
       <h1>Scrubs</h1>
        <hr />
        <div className='scrub'>
                 {All_Scrubs.map((item, i) => {
                   return (
                   <div key={i} className='scrubs-image-container'>
                   <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                   </div>
                           );
          })} 
            </div>
        </div>
    
  );
};

export default AllScrubs;