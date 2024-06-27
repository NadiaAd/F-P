import React from 'react';
import './Footer.css';
import FooterLogo from '../Assets/FooterLogo.jpg'; 

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={FooterLogo} alt='Footer logo'/>
            </div>
        </div>
    )
}

export default Footer; 