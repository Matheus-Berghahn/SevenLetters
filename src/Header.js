import './Header.scss';
import LogoHeader from "./assets/images/logo1.png"

function Header() {


  return (
    <header className="header">
      <div className='max'>
        <img src={LogoHeader} alt="LIVRO 1"/>
        <div className="header-right">
          <p className="faq">FAQ</p>
          <a href='/checkout' className='btn btnHover'>COMPRAR</a>
        </div>
      </div>
    </header>
  );
}

export default Header;