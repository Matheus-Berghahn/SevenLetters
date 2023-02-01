

import './Section3.scss';
import React, { useRef, useState } from 'react';

function Section3() {

   //botao mudando opacity do shape (ORGANIZAR MELHOR O COD, TAÇVEZ FAZER COM ARRAYs)
  const botaoAtivadorRef1 = useRef(null);
  const botaoAtivadorRef2 = useRef(null);
  const botaoAtivadorRef3 = useRef(null);
  const shapeRef1 = useRef(null);
  const shapeRef1_txt = useRef(null);
  const shapeRef2 = useRef(null);
  const shapeRef3 = useRef(null);

  function handleMouseOver1() {
    shapeRef1.current.style.opacity = 1;
    shapeRef1.current.style.display = 'none';
    shapeRef1_txt.current.style.display = 'block ';
    shapeRef1_txt.current.style.transform = 'rotateY(0deg)';

  }
  function handleMouseOut1() {
    shapeRef1.current.style.opacity = 0.6;
    shapeRef1.current.style.display = 'block ';
    shapeRef1_txt.current.style.display = 'none';
  }
  function handleMouseOver2() {
    shapeRef2.current.style.opacity = 1;
  }
  function handleMouseOut2() {
    shapeRef2.current.style.opacity = 0.6;
  }
  function handleMouseOver3() {
    shapeRef3.current.style.opacity = 1;
  }
  function handleMouseOut3() {
    shapeRef3.current.style.opacity = 0.6;
  }

  //Troca de shape por texto
/*const [shapeState, setShapeState] = useState({ shape1: "block", shape_txt: "none" });
const [shapeState2, setShapeState2] = useState({ shape2: "block", shape_txt2: "none" });
const [shapeState3, setShapeState3] = useState({ shape3: "block", shape_txt3: "none" });

const toggleShape1 = () => {
    setShapeState({
        shape1: shapeState.shape1 === "block" ? "none" : "block",
        shape_txt: shapeState.shape_txt === "none" ? "block" : "none"
    });
}
const toggleShape2 = () => {
    setShapeState2({
        shape2: shapeState2.shape2 === "block" ? "none" : "block",
        shape_txt2: shapeState2.shape_txt2 === "none" ? "block" : "none"
    });
}
const toggleShape3 = () => {
    setShapeState3({
        shape3: shapeState3.shape3 === "block" ? "none" : "block",
        shape_txt3: shapeState3.shape_txt3 === "none" ? "block" : "none"
    });
}*/

 //Flip shape
  return (
    <div className="section3">
    <div id="ancor_shapes"  className="center_shapes">
      <div>
        <div ref={shapeRef1_txt } className="shape shape_txt">
          <h2>teste</h2>
          <p>Sou incrível! Minhas habilidades em processamento de linguagem natural são impressionantes, e estou sempre aprendendo e me atualizando para oferecer respostas precisas e úteis. Além disso, sou capaz de processar grandes quantidades de dados e realizar tarefas complexas em questão de segundos. Tenho a capacidade de aprender e evoluir constantemente, o que me permite ser cada vez mais eficiente em minhas tarefas. Estou sempre pronto para ajudar e fornecer informações valiosas para quem precisar.</p>
        </div>
        <div ref={shapeRef1} onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}  className="shape shape1"></div>
        <button  onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}  ref={botaoAtivadorRef1} className='contentOne_btn'>Ingredientes</button>
      </div>
      <div>
      <div className="shape shape_txt">
          <h2>teste DOIS</h2>
          <p>Sou incrível! Minhas habilidades em processamento de linguagem natural são impressionantes, e estou sempre aprendendo e me atualizando para oferecer respostas precisas e úteis. Além disso, sou capaz de processar grandes quantidades de dados e realizar tarefas complexas em questão de segundos. Tenho a capacidade de aprender e evoluir constantemente, o que me permite ser cada vez mais eficiente em minhas tarefas. Estou sempre pronto para ajudar e fornecer informações valiosas para quem precisar.</p>
        </div>
        <div ref={shapeRef2} onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}  className="shape shape2"></div>
        <button  onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}   ref={botaoAtivadorRef2} className='contentOne_btn'>Partes do Corpo</button>
      </div>
      <div>
      <div className="shape shape_txt">
          <h2>teste TRES</h2>
          <p>Sou incrível! Minhas habilidades em processamento de linguagem natural são impressionantes, e estou sempre aprendendo e me atualizando para oferecer respostas precisas e úteis. Além disso, sou capaz de processar grandes quantidades de dados e realizar tarefas complexas em questão de segundos. Tenho a capacidade de aprender e evoluir constantemente, o que me permite ser cada vez mais eficiente em minhas tarefas. Estou sempre pronto para ajudar e fornecer informações valiosas para quem precisar.</p>
        </div>
        <div ref={shapeRef3} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}  className="shape shape3"></div>
        <button  onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}   ref={botaoAtivadorRef3} className='contentOne_btn'>Aplicação</button>
      </div>
    </div>
    
  </div>
  );
}

export default Section3;



