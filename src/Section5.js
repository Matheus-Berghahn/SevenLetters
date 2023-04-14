import React from "react";
import './Section5.scss';
import {Parallax} from "react-parallax"
import shape2 from "./assets/images/parallax2.png"



function Section5() {

  const scrollToClasseDeDestino = () => {
    const classeDeDestino = document.getElementById("ancor_faq");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="section5">
      <Parallax  className="bg_parallax" bgImage={ shape2 } strength={800}>
      <div className="txt_parallax">
          <h2>Ficou com alguma dúvida?</h2>

        </div>
        <div className='contentTree_middle'>
          <button  onClick={scrollToClasseDeDestino} className='contentTree_btn contentTree_btn1'>FAQ</button>
        </div>
          
      </Parallax>
    </div>
  );
}

export default Section5 ;



