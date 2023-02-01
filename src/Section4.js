import produto from "./assets/images/produto2.png"
import shape from "./assets/images/shape3.png"
import shape2 from "./assets/images/shape4.png"
import './Section4.scss';

function Section1() {

  return (
    <div className="section4 max-width">
    <div className="contentOne_shape ">
      <img className="shape_in" src={shape} alt="shape"/>
    </div>
      <img src={produto} alt="produto"/>
  </div>
  );
}

export default Section1;



