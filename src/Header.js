import './Header.scss';
import LogoHeader from "./assets/images/logo.png";
import { useRef, useEffect, useState } from 'react';

function Header() {
  // Anchor for FAQ
  const scrollToClasseDeDestino = () => {
    const classeDeDestino = document.getElementById("ancor_faq");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }

  // Back button in checkout page
  const handleClickComprar = () => {
    toggleShape1();
  }

  const handleClickVoltar = () => {
    toggleShape1();
  }

  // Scroll of HEADER (change color)
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

  const [shapeState, setShapeState] = useState({ shape1: "block", shape_txt: "none" });

  const toggleShape1 = () => {
    setShapeState({
      shape1: shapeState.shape1 === "block" ? "none" : "block",
      shape_txt: shapeState.shape_txt === "none" ? "block" : "none"
    });
  }

  return (
    <header ref={headerRef} className="header">
      <div className='max'>
        <img src={LogoHeader} alt="LIVRO 1"/>
        <div className="header-right">
          <p onClick={scrollToClasseDeDestino} style={{display: shapeState.shape1}} className="faq">FAQ</p>
          <div className='middle'>
            <button href='/checkout' style={{display: shapeState.shape1}} onClick={handleClickComprar} className='btn btn1'>COMPRAR</button>
            <button style={{display: shapeState.shape_txt}} onClick={handleClickVoltar} className='btn btn1 btn_voltar'>Voltar</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
