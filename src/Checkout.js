import mongoose from 'mongoose';
import axios from 'axios';
import React, { useState } from 'react';
import './Checkout.scss';
import { FaUser } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import card01 from "./assets/images/card01.png";

const produtos = {
  nome: "corrente",
  preco: 150,
  estoque: 10
}

const Checkout = () => {
  
  //mongoose.connect('mongodb+srv://admin:<0JPAfgyaaWR91Cm3>@cluster0.wbwmsjx.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

  const FormSchema = new mongoose.Schema({
    name: String,
    email: String
  });
  const Form = mongoose.model('Form', FormSchema);
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.quant.value)
    // validar form
    const formData = new Form({
      name: event.target.name.value,
      email: event.target.email.value
    });
    
    // Salva os dados do formulário no banco de dados MongoDB
    formData.save((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Form submitted successfully!');
      }
    });
    
    // Envia os dados do formulário para uma API externa
    axios.post('https://example.com/api/form', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [selected, setSelected] = useState('yes');
  const handleChange = event => {
    setSelected(event.target.value);

  };

  return (

    <div className='checkout max-width'>
      <form onSubmit={handleSubmit}>
        <div className='info-left'>
          <div className='header-pay'>
            <h2>Pagamento</h2>
            <div className='icons-group'>
              <h2 className='icon'><FaUser /></h2>
              <h2 className='icon'><MdLocationOn /></h2>
              <h2 className='icon'><FaCreditCard /></h2>
              <span></span>
            </div>
          </div>
          <div className='optionCheckout'>
            <div>
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
            <div>
            <img src={card01} alt="card1"/>
            </div>
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
        <button type="submit">Comprar</button>
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