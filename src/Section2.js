import React from "react";
import './Section2.scss';
import {Parallax} from "react-parallax"
import shape2 from "./assets/images/parallax.png"



function Section2() {

  const scrollToClasseDeDestino = () => {
    const classeDeDestino = document.getElementById("ancor_shapes");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="section2">
      <Parallax  className="bg_parallax" bgImage={ shape2 } strength={500}>
        <div className="txt_parallax">
          <h2>Quer conhecer mais sobre a pomada FisioFort?</h2>

        </div>
        <div className='contentTree_middle'>
          <button  onClick={scrollToClasseDeDestino} className='contentTree_btn contentTree_btn1'>Vamos lá</button>
        </div>
      </Parallax>
    </div>
  );
}

export default Section2;



