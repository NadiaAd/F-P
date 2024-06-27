// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/FYPLogo.png';
import shoppingBag from '../Assets/shopping-bag.png';

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("shop");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '16px',
    transition: '0.3s ease-in-out',
    boxShadow: '0 -1px 3px -2px black',
    backgroundColor: scrolling ? 'white' : 'transparent',
  };

  return (
    <div style={navbarStyle}>
      <div className='nav-container'>
      <div className='nav-logo'>
        <img src={logo} alt="" className="logo" />
        <p> Fruta E' Pan</p>
      </div>
      

      <ul className='nav-menu'> 
        <li
          onMouseEnter={() => setSelectedMenu("shop")}
          className={selectedMenu === "shop" ? 'underline' : ''}
        >
          <Link to='/'>Shop</Link>
        </li>
        <li
          onMouseEnter={() => setSelectedMenu("drops-and-oils")}
          className={selectedMenu === "Drops & Oils" ? 'underline' : ''}
        >
          <Link to='/drops-and-oils'> Drops & Oils</Link>
        </li>
        <li
          onMouseEnter={() => setSelectedMenu("butters-and-bundles")}
          className={selectedMenu === "Butters & Bundles" ? 'underline' : ''}
        >
        <Link to='/butters-and-bundles'>Butters & Bundles</Link>
        </li>
        <li
          onMouseEnter={() => setSelectedMenu("scrubs")}
          className={selectedMenu === "scrubs" ? 'underline' : ''}
        >
          <Link to='/scrubs'>Scrubs</Link>
        </li>
        <li
          onMouseEnter={() => setSelectedMenu("about us")}
          className={selectedMenu === "about us" ? 'underline' : ''}
        >
          <Link to='/about us'>About Us</Link>
        </li>
      </ul>

      <div className='nav-shopping-bag'>
        <Link to='/login'><button> Login </button></Link> 
        <Link to='/bag'><img src={shoppingBag} className="bag" alt=""/></Link>  
        <div className='nav-bag-count'>0</div> 
      </div> 
    </div>
    </div>
  );
};

export default Navbar;




