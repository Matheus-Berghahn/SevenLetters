import React from "react";
import './Section2.scss';
import {Parallax} from "react-parallax"
import shape2 from "./assets/images/teste.png"


function Section2() {

  return (
    <div className="section2">
      <Parallax  className="bg_parallax" bgImage={ shape2 } strength={500}>
        <div className="txt_parallax">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non accumsan urna. 
          In at enim lectus. Nunc consectetur ut urna vel mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse non accumsan urna. In at enim lectus. Nunc consectetur ut urna vel mattis.
          </p>
        </div>
        <div className='contentTree_middle'>
          <a href='/checkout' className='contentTree_btn contentTree_btn1'>Saiba Mais</a>
        </div>
      </Parallax>
    </div>
  );
}

export default Section2;



