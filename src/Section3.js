

import './Section3.scss';
import React, { useRef, useState } from 'react';

function Section3() {
  const botaoAtivadorRef1 = useRef(null);
  const botaoAtivadorRef2 = useRef(null);
  const botaoAtivadorRef3 = useRef(null);
  const shapeRef1 = useRef(null);
  const shapeRef2 = useRef(null);
  const shapeRef3 = useRef(null);
  const txt1 = useRef(null);
  const txt2 = useRef(null);
  const txt3 = useRef(null);


  function clickbutton1() {
    const button = botaoAtivadorRef1.current;
    if(txt1.current.style.display === 'block') {
      console.log('texto')
      shapeRef1.current.style.display = 'block';
      txt1.current.style.display = 'none';
      button.style.transform = `translateY(0px)`;
      button.style.transition = 'transform 10ms';
      button.style.fontSize = '15px';
      button.style.pointerEvents = 'none';
      button.addEventListener('transitionend', () => {
        button.style.pointerEvents = 'auto';
      }, { once: true });
    } else {
      console.log('textowwweddwdww')
      shapeRef1.current.style.display = 'none';
      txt1.current.style.display = 'block';
      button.style.transform = `translateY(-720px)`;
      button.style.transition = 'transform 600ms';
      button.style.fontSize = '30px';
      button.style.pointerEvents = 'none';
      button.addEventListener('transitionend', () => {
        button.style.pointerEvents = 'auto';
      }, { once: true });
    }
  }
  
  function clickbutton2() {
    const button = botaoAtivadorRef2.current;
    if (txt2.current.style.display === 'block') {
      shapeRef2.current.style.display = 'block';
      txt2.current.style.display = 'none';
      button.style.transform = `translateY(0px)`;
      button.style.transition = 'transform 10ms';
      button.style.fontSize = '15px';
      button.style.pointerEvents = 'none';
      button.addEventListener('transitionend', () => {
        button.style.pointerEvents = 'auto';
      }, { once: true });
    } else {
      shapeRef2.current.style.display = 'none';
      txt2.current.style.display = 'block';
      button.style.transform = `translateY(-720px)`;
      button.style.transition = 'transform 600ms';
      button.style.fontSize = '30px';
      button.style.pointerEvents = 'none';
      button.addEventListener('transitionend', () => {
        button.style.pointerEvents = 'auto';
      }, { once: true });
    }
  }

  function clickbutton3() {
    const button = botaoAtivadorRef3.current;
    if (txt3.current.style.display === 'block') {
      shapeRef3.current.style.display = 'block';
      txt3.current.style.display = 'none';
      button.style.transform = `translateY(0px)`;
      button.style.transition = 'transform 10ms';
      button.style.fontSize = '15px';
      button.style.pointerEvents = 'none';
      button.addEventListener('transitionend', () => {
        button.style.pointerEvents = 'auto';
      }, { once: true });
    } else {
      shapeRef3.current.style.display = 'none';
      txt3.current.style.display = 'block';
      button.style.transform = `translateY(-720px)`;
      button.style.transition = 'transform 600ms';
      button.style.fontSize = '30px';
      button.style.pointerEvents = 'none';
      button.addEventListener('transitionend', () => {
        button.style.pointerEvents = 'auto';
      }, { once: true });
    }
  }
  
 //Flip shape
  return (
    <div className="section3">
    <div id="ancor_shapes"  className="center_shapes">

      <div className='shape_padding'>
        <div ref={txt1} onClick={clickbutton1} className="shape shape_txt1">
          <p><b>Arnica:</b> A Arnica é uma planta medicinal que possui propriedades anti-inflamatórias e analgésicas. É comumente usada em pomadas e géis para aliviar dores musculares, contusões e inflamações.<br></br><br></br>

          <b>Essência de terebentina:</b> A essência de terebentina é um líquido obtido a partir da destilação da resina de algumas árvores. É frequentemente utilizado em produtos de limpeza, mas também é usado em pomadas e bálsamos para tratar dores musculares e articulares.<br></br><br></br>

          <b>Salicilato de metila:</b> O salicilato de metila é um composto químico utilizado em medicamentos analgésicos, tais como pomadas e cremes para aliviar dores musculares, artrite e reumatismo. Ele tem propriedades anti-inflamatórias e é derivado do ácido salicílico.<br></br><br></br>

          <b>Mentol:</b> O mentol é um composto orgânico com propriedades analgésicas e anti-inflamatórias. Ele é frequentemente encontrado em balas, chicletes, pomadas e cremes para aliviar dores musculares e dores de cabeça, além de proporcionar sensação de frescor.<br></br><br></br>
            
          <b>Mastruz:</b> uma planta medicinal muito utilizada na medicina popular, especialmente no Nordeste do Brasil, conhecida por suas propriedades analgésicas, anti-inflamatórias e antimicrobianas, e utilizada no tratamento de diversas condições, incluindo dores de cabeça, artrite, cólicas menstruais, entre outras.<br></br><br></br>

          <b>Copaíba:</b> um óleo essencial obtido a partir da resina da árvore de copaíba, nativa da Amazônia, conhecido por suas propriedades anti-inflamatórias, antimicrobianas e cicatrizantes, frequentemente usado em produtos para tratar problemas de pele, dores musculares e inflamações.<br></br><br></br>

          <b>Cânfora:</b> A cânfora é um composto orgânico que possui propriedades anti-inflamatórias e analgésicas. Ela é frequentemente usada em pomadas e bálsamos para aliviar dores musculares e articulares, além de tratar problemas respiratórios e de pele.</p>
        </div>
        <div ref={shapeRef1} onClick={clickbutton1}   className="shape shape1"></div>
        <button onClick={clickbutton1}   ref={botaoAtivadorRef1} className='contentOne_btn'>Componentes</button>
      </div>

      <div className='shape_padding'>
      <div ref={txt2} onClick={clickbutton2} className="shape shape_txt2">
          <p>Somente para uso externo. Não aplicar próximo a mucosas, olhos e/ou em locais onde a pele estiver lesionada ou irritada. Não inalar. Nunca ingerir. Se houver irritação, descontinuar o uso e procurar orientação médica.<br></br><br></br>
          
          O produto é seguro, não sendo recomendado para pessoas que tenham sensibildade a algum componente da formulação, crianças, gestantes e lactantes. Conservar em temperatura ambiente inferior a 40°C, em local fresco e longe da luz solar.<br></br><br></br>
          
          Além das restrições já mencionadas na descrição do produto, é importante destacar que a pomada deve ser mantida fora do alcance de crianças e animais domésticos. O uso em excesso pode causar efeitos colaterais, como vermelhidão, coceira e descamação da pele.<br></br><br></br>

Pessoas com histórico de alergias ou sensibilidade a produtos similares devem tomar precauções ao usar esta pomada e procurar orientação médica antes de usá-la. Caso ocorra algum tipo de reação adversa, como coceira, vermelhidão ou inchaço, a aplicação deve ser interrompida imediatamente.<br></br><br></br>

É importante lembrar que a pomada não deve ser usada como substituto para orientação médica adequada. Em caso de dúvida ou persistência dos sintomas, é recomendado procurar um profissional de saúde para avaliação e tratamento adequados.<br></br><br></br>

Por fim, a pomada deve ser mantida em sua embalagem original e não deve ser utilizada após o prazo de validade indicado na embalagem.</p>
      </div>
        <div ref={shapeRef2}  onClick={clickbutton2}  className="shape shape2"></div>
        <button  onClick={clickbutton2}   ref={botaoAtivadorRef2} className='contentOne_btn'>Restrições</button>
      </div>

      <div className='shape_padding'>
      <div ref={txt3} onClick={clickbutton3} className="shape shape_txt3">
  
          <p>Ela é indicada para uso tópico em áreas do corpo que apresentam desconforto muscular, como nas costas, pernas, braços e pescoço entre outros.<br></br><br></br>

          Existem diversas situações em que FisioFort pode ser utilizada, como após a prática de atividades físicas intensas, após um dia de trabalho exaustivo ou em casos de tensão muscular causada por estresse. A pomada é formulada com substâncias analgésicas e anti-inflamatórias que atuam diretamente na região afetada, proporcionando alívio imediato.<br></br><br></br>

          A aplicação da pomada é simples e pode ser feita por qualquer pessoa. Antes de utilizá-la, é recomendado lavar as mãos e a região afetada com água e sabão. Em seguida, basta aplicar uma pequena quantidade da pomada na área desejada e massagear suavemente até que ela seja completamente absorvida pela pele. O processo pode ser repetido de 2 a 3 vezes ao dia, de acordo com a orientação médica.<br></br><br></br>
          
          É importante lembrar que, assim como qualquer medicamento, é necessário seguir as instruções de uso corretamente e evitar o uso excessivo, pois isso pode causar efeitos colaterais indesejáveis. Em casos de dores crônicas ou persistentes, é sempre recomendado procurar um médico para uma avaliação mais detalhada.<br></br><br></br>

          Em resumo, FisioFort é uma pomada muscular eficaz e segura que pode ajudar a aliviar dores e desconfortos musculares de forma rápida e eficiente. Se você está sofrendo com dores localizadas, experimente FisioFort e sinta o alívio imediato.</p>
        </div>
        <div ref={shapeRef3} onClick={clickbutton3}   className="shape shape3"></div>
        <button onClick={clickbutton3}    ref={botaoAtivadorRef3} className='contentOne_btn'>Aplicação</button>
      </div>
    </div>
    
  </div>
  );
}

export default Section3;



