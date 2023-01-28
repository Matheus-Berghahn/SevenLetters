import './Header.scss';
import LogoHeader from "./assets/images/logo.png"
import { useRef } from 'react';
import { useEffect } from 'react';

function Header() {
  
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScroll = () => {
    const { current } = headerRef;
    if (current) {
      if (window.pageYOffset > 50) {
        current.style.backgroundColor = '#070606ef';
        current.style.backdropFilter = 'blur(5px)';
      } else {
        current.style.backgroundColor = '#070606';
      }
    }
  };
 
  return (
    <header ref={headerRef} className="header">
      <div className='max'>
        <img src={LogoHeader} alt="LIVRO 1"/>
        <div className="header-right">
          <p className="faq">FAQ</p>
          <div className='middle'>
            <a href='/checkout' className='btn btn1'>COMPRAR</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


