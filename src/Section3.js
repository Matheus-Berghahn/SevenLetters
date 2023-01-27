import React from "react";
import {Parallax} from "react-parallax"
import shape2 from "./assets/images/teste.png"


function Section3() {

  return (
    <div className="section3">
        <Parallax bgImage={ shape2 } strength={500}>
        <div className='contentOne_middle'>
          <a href='/checkout' className='contentOne_btn contentOne_btn1'>Saiba Mais</a>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default Section3;



