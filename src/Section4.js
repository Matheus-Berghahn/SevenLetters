import React from "react";
import './Section4.scss';
import {Parallax} from "react-parallax"
import shape2 from "./assets/images/parallax2.png"



function Section4() {

  const scrollToClasseDeDestino = () => {
    const classeDeDestino = document.getElementById("ancor_faq");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="section4">
      <Parallax  className="bg_parallax" bgImage={ shape2 } strength={500}>
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

export default Section4 ;



