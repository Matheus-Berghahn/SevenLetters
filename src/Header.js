import './Header.scss';
import LogoHeader from "./assets/images/logo.png"



function Header() {
  
  //anima de Scroll Header 

  
  function handleScroll(e){
    let scroll = window.scrollY
    console.log(e.className)
  }
  window.addEventListener('scroll', handleScroll)

    // if (scroll > 40) {
    //     e.classList.add("scroll_black")
    // } else {
    //     e.classList.remove("scroll_black")
    // }
 
  return (
    <header className="header" onScroll={handleScroll}>
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


