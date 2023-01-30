import React, { useState } from 'react';
import './Checkout.scss';
import './Form.scss';
import { FaUser } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import FormCLient from './forms/FormCLient';
// import FormAdress from './forms/FormAdress';
import FormPay from './forms/FormPay';


// import card01 from "./assets/images/card01.png";

const Checkout = (dataUser) => {

  console.log(dataUser)  

  return (
    <>
    <div className='max-width'>
      <div className='checkout'>
        <div className='info-left'>
          <div className='align-header'>
              <div>
                <h2>Informações Pessoais</h2>
              </div>
              <div className='icons-group'>
                <h2 className='icon'><FaUser /></h2>
                <h2 className='icon'><MdLocationOn /></h2>
                <h2 className='icon'><FaCreditCard /></h2>
                <span></span>
              </div>
          </div>
            <FormCLient/>
        </div>
        <div className='info-rigth'>
        <h2>Resumo</h2>
        <span className='saparation'></span>
        <div className='contentBox'>
          <p>teste</p>
          <div className='labelQuant'>
            <label htmlFor='quant'>Quantidade</label>
            <input type="number" id="quant" name="quant" min="0" max={10} required />
          </div>
          <p>teste</p>
        </div>
        <span className='saparation'></span>
        <div className='contentBox'>
          <p>Subtotal<span>{`R$`}</span></p>
          <p>Frete<span>{`R$`}</span></p>
        </div>
        <span className='saparation'></span>
        <div className='contentBox'>
          <b><p>Total<span>{`R$`}</span></p></b>
        </div>
      </div>
      </div>
    </div>
    </>
    );
  };
  
export default Checkout;