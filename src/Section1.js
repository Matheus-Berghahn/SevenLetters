import produto from "./assets/images/produto.png"
import shape from "./assets/images/shape.png"
import shape2 from "./assets/images/shape2.png"
import './Section1.scss';

function Section1() {

  return (
    <div className="section1 max-width">

    <div className="contentOne_leftSide">
      <h1><b>FisioFort:</b> a solução eficaz para aliviar dores musculares</h1>
      <p>A pomada muscular é a solução perfeita para aliviar a dor e a tensão nos músculos e articulações. Com uma fórmula potente e eficaz, ela penetra profundamente na pele para aliviar a dor e a inflamação, deixando seus músculos e articulações se sentindo relaxados e rejuvenescidos. Além disso, a pomada é fácil de usar e pode ser aplicada diretamente na área afetada, sem sujar as suas mãos. Experimente hoje e sinta a diferença em seus músculos e articulações. Adquira já a sua pomada muscular!
      </p>

      <div className='contentOne_middle'>
          <a href='/checkout' className='contentOne_btn contentOne_btn1'>Compre Agora</a>
        </div>
    </div>

    <div className="contentOne_rightSide">
      <img className="produto" src={produto} alt="produto"/>
      <div className="contentOne_shape ">
        <img className="shape_in" src={shape} alt="shape"/>
      </div>
      <div className="contentOne_shape2 ">
        <img className="shape2_in" src={shape2} alt="shape2"/>
      </div>
    </div>


    
  </div>
  );
}

export default Section1;



