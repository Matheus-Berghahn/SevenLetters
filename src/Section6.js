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
        "Como funciona a forma de pagamento?",
        "A forma de pagamento utilizada é através do Pagar.me, que é um serviço de processamento de pagamentos online. O pagamento é feito apenas com cartão de crédito e é considerado seguro. O processo de pagamento ocorre da seguinte maneira: o comprador insere os dados do cartão de crédito, que são criptografados e enviados para o Pagar.me, que realiza a autorização e a captura do valor da transação."
      )}
      {renderAccordionItem(
        1,
        "Como vou receber meu produto?",
        "Você receberá seu produto através de um e-mail contendo as informações necessárias para acessá-lo. Por se tratar de um produto digital, não é necessário envio físico ou entrega em mãos, o que torna o processo mais rápido e conveniente. Verifique a caixa de entrada do e-mail que você informou no momento da compra para ter acesso ao seu produto. Certifique-se de verificar também a pasta de spam, caso não localize o e-mail na caixa de entrada."
      )}
      {renderAccordionItem(
        2,
        "O que é um produto digital?",
        "Um produto digital é um item virtual que pode ser baixado, acessado ou entregue por meio eletrônico, como por exemplo um e-book, um software, uma música ou um curso online. Normalmente, após a compra, o comprador recebe um link de download ou o arquivo digital diretamente em seu e-mail. Diferentemente de produtos físicos, produtos digitais não precisam ser armazenados em estoque e podem ser vendidos ilimitadas vezes sem a necessidade de reabastecimento. Eles são uma opção econômica e ecologicamente consciente, já que não geram desperdício de material e não requerem gastos com logística de transporte."
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
