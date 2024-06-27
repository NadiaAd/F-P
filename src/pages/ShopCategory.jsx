import React from 'react';
import DropsAndOils from '../Components/Oils/DropsAndOils';
import ButtersAndBundles from '../Components/Butters/ButtersAndBundles';
import AllScrubs from '../Components/Scrubs/Scrubs';


const ShopCategory = () => {
  return (
    <div>
      <DropsAndOils/>
      <ButtersAndBundles/>
      <AllScrubs/>
    </div>
  );
};

export default ShopCategory;