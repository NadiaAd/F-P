import React from 'react';
import './DropsAndOils.css';
import Drops_AndOils from '../Assets/DropsAndOils'; 
import Item from '../Item/Item';

const DropsAndOils = () => {
    return (
      <div className='all-oils'>
        <h1> Drops & Oils</h1>
        <hr />
        <div className='oils'>
                 {Drops_AndOils.map((item, i) => {
                   return (
                   <div key={i} className='oil-image-container'>
                   <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                   </div>
                           );
          })} 
            </div>
        </div>
    );
  };
  

export default DropsAndOils;