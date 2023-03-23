import { useState } from "react";
import "./Section6.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

function Section6() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAccordionItem = (index, title, content) => {
    const isActive = activeIndex === index;

    return (
      <div key={index} className="accordion-item">
        <div
          className={`accordion-header ${isActive ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <h2>{title}</h2>
          <span className="icon">
            {isActive ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
          </span>
        </div>
        <div className={`accordion-content ${isActive ? "open" : ""}`}>
          {content}
        </div>
      </div>
    );
    
  };

  return (
    <div id="ancor_faq"  className="accordion">
      <div><h2 className="title">Perguntas frequentes</h2></div>
      {renderAccordionItem(
        0,
        "O que são pomadas musculares?",
        "As pomadas musculares são medicamentos tópicos que são aplicados na pele para aliviar a dor muscular, a inflamação e a rigidez. Elas contêm ingredientes ativos que penetram na pele e atuam nos músculos e articulações para aliviar a dor e a inflamação."
      )}
      {renderAccordionItem(
        1,
        "Como as pomadas musculares funcionam?",
        "As pomadas musculares contêm ingredientes ativos, como salicilato de metila, cânfora, mentol, diclofenaco e ibuprofeno, que têm propriedades analgésicas e anti-inflamatórias. Esses ingredientes penetram na pele e atuam nos receptores de dor para aliviar a dor muscular e reduzir a inflamação."
      )}
      {renderAccordionItem(
        2,
        "Quais são os tipos de pomadas musculares disponíveis?",
        "Existem vários tipos de pomadas musculares disponíveis, incluindo pomadas com analgésicos, pomadas com anti-inflamatórios, pomadas com relaxantes musculares e pomadas com uma combinação desses ingredientes."
      )}
      {renderAccordionItem(
        3,
        "Quem pode usar pomadas musculares?",
        "Qualquer pessoa que sofra de dor muscular, rigidez ou inflamação pode usar pomadas musculares. No entanto, é importante ler as instruções do fabricante e seguir as recomendações de uso."
      )}
    </div>
  );
}

export default Section6;
