import React from 'react';
import './Hero.css';
import HeroImage from '../Assets/HeroImage.jpg';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='hero' style={heroStyle}>
      <div className="hero-overlay">
        <div className="hero-left">
          <h2> New Products, Trusted Formulas </h2>
          <div>
              <p> Skin Health Begins Here </p>
              
            </div>
    
          </div>
          <div className="hero-Nourish-and-glow-btn">
            <div> Shop Now </div>
          </div>
        </div>
      </div>
    
  );
};

export default Hero;