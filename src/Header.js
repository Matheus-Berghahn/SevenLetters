import './Header.scss';
import LogoHeader from "./assets/images/logo.png"



function Header() {
  
  //anima de Scroll Header 
var headerScroll = document.querySelector('.header');

window.addEventListener("scroll", function() {
    var scroll = window.scrollY

    if (scroll > 40) {
        headerScroll.classList.add("scroll_black")
    } else {
        headerScroll.classList.remove("scroll_black")
    }
})
 
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


