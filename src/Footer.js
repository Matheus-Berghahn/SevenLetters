import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer_txt'>
      <p>Info - Support - Marketing</p>
      <p>Terms of Use - Privacy Policy</p>
      <p className='color_p'>Copyright © {new Date().getFullYear()} My Website</p>
      </div>
    </footer>
  );
}

export default Footer;