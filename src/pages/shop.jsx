import React from 'react';
import Hero from '../Components/Hero/Hero';
import Rejuvanate from '../Components/Rejuvanate/Rejuvanate';
import DropsAndOils from '../Components/Oils/DropsAndOils';
import ButtersAndBundles from '../Components/Butters/ButtersAndBundles';
import AllScrubs from '../Components/Scrubs/Scrubs';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const shop = () => {
  return (
    <div>
      <Hero/>
      <Rejuvanate/>
      <DropsAndOils/>
      <ButtersAndBundles/>
      <AllScrubs/>
      <NewsLetter/> 
    </div>
  );
};

export default shop;
