import React from 'react';
import './Footer.scss';
import LogoHeader from "./assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className='footer_txt'>
          <img src={LogoHeader} alt="LIVRO 1"/>
      <p>Seven Letters Store 2023 © Todos direitos reservados.</p>
      
      </div>
    </footer>
  );
}

export default Footer;