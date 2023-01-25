import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className='max'>
        <h1 className="header-title">Meu Cabeçalho</h1>
        <div className="header-right">
          <p className="faq">FAQ</p>
          <a href='/#' className='btn btnHover'>COMPRAR</a>
        </div>
      </div>
    </header>
  );
}

export default Header;