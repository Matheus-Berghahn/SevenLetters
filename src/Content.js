
import produto from "./assets/images/produto.png"
import shape from "./assets/images/shape.png"
import shape2 from "./assets/images/shape2.png"


function Content() {

  return (
    <div className="contentOne">
      <div className="contentOne_shape">
        <img src={shape} alt="shape"/>
      </div>
      <div className="contentOne_shape2">
        <img src={shape2} alt="shape2"/>
      </div>
      
      <div className="contentOne_leftSide">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non accumsan urna. 
          In at enim lectus. Nunc consectetur ut urna vel mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse non accumsan urna. In at enim lectus. Nunc consectetur ut urna vel mattis.
        </p>

        <div className='contentOne_middle'>
            <a href='/checkout' className='contentOne_btn contentOne_btn1'>COMPRAR</a>
          </div>
      </div>

      <div className="contentOne_rightSide">
          <img src={produto} alt="produto"/>
      </div>
    </div>
  );
}

export default Content;