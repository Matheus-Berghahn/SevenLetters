//import React, { useState } from 'react';
import './Checkout.scss';

const produtos = {
  nome: "xicara",
  preco: 10500
}

const Checkout = () => {

  // async function getData(){
  //   await fetch(`https://api.github.com/users/GregoreGomes`)
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((json) => {
  //     console.log(json);
  //     return json;
  //   })
  // }
  // console.log(getData())
  
  const handleSubmit = event => {
    event.preventDefault();
    // validar form
    // mandar para api de pagamento
  };

    return (
      <div className='checkout'>
        <form onSubmit={handleSubmit}>
          <div className='info-left'>
            <h2>Pagamento</h2>
            <div className='optionCheckout'>
              <input type="checkbox"></input>
              <h3>Cartão de Crédito</h3>
              <div>
              </div>
            </div>
            <div className='optionCheckout'>
              <input type="checkbox"></input>
              <h3>Boleto</h3>
            </div>
            <div className='optionCheckout'>
              <input type="checkbox"></input>
              <h3>PIX</h3>
            </div>
          </div>
        </form>
          <div className='info-rigth'>
            <h2>Resumo</h2>
            <p>{produtos.nome}</p>
            <p>{produtos.preco}</p>
          </div>
      </div>
    );
  };

  
export default Checkout;