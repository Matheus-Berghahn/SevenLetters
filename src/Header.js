import './Header.scss';
import LogoHeader from "./assets/images/logo.png"

function Header() {

  return (
    
    <header className="header">
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