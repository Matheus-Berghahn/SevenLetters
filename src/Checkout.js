import React, { useState } from 'react';
import './Checkout.scss';

const produtos = {
  nome: "xicara",
  preco: 10500,
  estoque: 10
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

  const [selected, setSelected] = useState('yes');
  
  const handleChange = event => {
    setSelected(event.target.value);
    console.log(event.target.value);
  };

  return (

    <div className='checkout'>
      <form onSubmit={handleSubmit}>
        <div className='info-left'>
          <h2>Pagamento</h2>

          <div className='optionCheckout'>
            <input type="radio"
            className='radio'
            id="card"
            name="choose"
            value="card"
            checked={selected === 'card'}
            onChange={handleChange} >
            </input>
            <label htmlFor='card'>Cartão de Crédito</label>
          </div>
          <div className='optionCheckout'>
            <input  type="radio"
            className='radio'
            id="boleto"
            name="choose"
            value="boleto"
            onChange={handleChange}
            checked={selected === 'boleto'}>
          </input>
            <label htmlFor='boleto'>Boleto</label>
          </div>
          <div className='optionCheckout'>
            <input type="radio"
            className='radio'
            id="pix"
            name="choose"
            value="pix"
            onChange={handleChange}
            checked={selected === 'pix'}>
          </input>
            <label htmlFor='pix'>PIX</label>
          </div>
        </div>
      </form>
        <div className='info-rigth'>
          <h2>Resumo</h2>
          <span className='saparation'></span>
          <div className='contentBox'>
            <p>{produtos.nome}</p>
            <div className='labelQuant'>
              <label htmlFor='quant'>Quantidade</label>
              <input type="number" id="quant" name="quant" min="0" max={produtos.estoque} required />
            </div>
            <p>{produtos.preco}</p>
          </div>
          <span className='saparation'></span>
          <div className='contentBox'>
            <p>Subtotal<span>{`R$${produtos.preco}`}</span></p>
            <p>Frete<span>{`R$${produtos.preco}`}</span></p>
          </div>
          <span className='saparation'></span>
          <div className='contentBox'>
            <b><p>Total<span>{`R$${produtos.preco}`}</span></p></b>
          </div>
        </div>
    </div>
    );
  };

  
export default Checkout;