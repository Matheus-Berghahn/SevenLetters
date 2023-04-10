import './Checkout.scss';
import Footer from './Footer';
import HeaderCheckout from './HeaderCheckout';
import cardsAcepts from "./assets/images/cards.png";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import { useParams } from "react-router-dom";
import InputMask from "react-input-mask";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { BsPinMap } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

import { createTransaction } from "../src/services/api";

const Checkout = () => {

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerDocument, setCustomerDocument] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingNumber, setBillingNumber] = useState("");
  const [billingNeighborhood, setBillingNeighborhood] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardExpiration, setCreditCardExpiration] = useState("");
  const [creditCardHolderName, setCreditCardHolderName] = useState("");
  const [creditCardCvv, setCreditCardCvv] = useState("");
  const [installments, setInstallments] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [paymentResponse, setPaymentResponse] = useState();
  
  // BUSCA CEP

  const [register, setValue] = useState({
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingNeighborhood: '',
  });

  const handleBuscaCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json()).then(data => {
      setValue(prevRegister => ({...prevRegister, [billingAddress]: data.logradouro, [billingCity]: data.localidade, [billingState]: data.uf, [billingNeighborhood]: data.bairro}));
    })
  };
  
  
   //
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    (async () => {
      setLoading(true);
      
      const response = await createTransaction({
        cartCode: 200,
        customerName,
        customerEmail,
        customerMobile,
        customerDocument,
        billingAddress,
        billingNumber,
        billingNeighborhood,
        billingCity,
        billingState,
        billingZipCode,
        creditCardNumber,
        creditCardExpiration,
        creditCardHolderName,
        creditCardCvv,
        installments: Number(installments),
        paymentType: "credit_card",
      });
      setPaymentResponse(response.data.status)
    })();
  };

  if (paymentResponse === "approved") {
    return(
      <div><h1>Pagamento aprovado</h1></div>
      )
    } else if( paymentResponse === "pending"){
      return(
        <div><h1>Boleto gerado</h1></div>
        )
      } else if(paymentResponse){
        return(
          <div><h1>Erro ao processar o pagamento</h1></div>
          )
        }
       
        return(
          <>
        <HeaderCheckout />







          <form className="form" onSubmit={handleSubmit}>
            <div className='form-payment'>
              <div className='main-form'>
                  <div className='billing-form'>
                    <div className='form-top'>
                      <BsPinMap className='card-pin'/>
                      <h3>Dados de entrega</h3>
                    </div>
                    <div className='label-input'>
                      <label htmlFor="name">Nome</label>
                      <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      />
                    </div>

                    <div className='label-input'>
                      <label htmlFor="email">Email</label>
                      <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      />
                    </div>
                
                    <div className='label-input'>
                      <label htmlFor="document">CPF</label>
                      <InputMask
                      mask="999.999.999-99"
                      type="text"
                      name="document"
                      id="document"
                      required
                      value={customerDocument}
                      onChange={(e) => setCustomerDocument(e.target.value)}
                      />
                    </div>
                
                    <div className='label-input'>
                      <label htmlFor="mobile">Número de telefone</label>
                      <InputMask
                      mask="(99) 99999-9999"
                      type="text"
                      name="mobile"
                      id="mobile"
                      required
                      value={customerMobile}
                      onChange={(e) => setCustomerMobile(e.target.value)}
                      />
                    </div>

                    <div className='label-input'>
                      <label htmlFor="zipcode">CEP</label>
                      <InputMask
                      mask="99999-999"
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      required
                      value={billingZipCode}
                      onChange={(e) => setBillingZipCode(e.target.value)}
                      onBlur={handleBuscaCep}
                      />
                    </div>
                  
                    <div className='label-input'>
                      <label htmlFor="address">Endereço</label>
                      <input
                      type="text"
                      name="address"
                      id="address"
                      required
                      value={billingAddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                      />
                    </div>
                    <div className='englobe'>
                      <div className='label-input'>
                        <label htmlFor="number">Número</label>
                        <input
                        type="text"
                        name="number"
                        id="number"
                        required
                        value={billingNumber}
                        onChange={(e) => setBillingNumber(e.target.value)}
                        
                        />
                      </div>
                    
                      <div className='label-input'>
                        <label htmlFor="neighborhood">Bairro</label>
                        <input
                        type="text"
                        name="neighborhood"
                        id="neighborhood"
                        required
                        value={billingNeighborhood}
                        onChange={(e) => setBillingNeighborhood(e.target.value)}
                        
                        />
                      </div>

                  </div>

                  <div className='englobe'>
                    <div className='label-input'>
                    <label htmlFor="city">Cidade</label>
                    <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={billingCity}
                    onChange={(e) => setBillingCity(e.target.value)}
                    
                    />
                    </div>
                
                  <div className='label-input'>
                    <label htmlFor="state">Estado</label>
                    <select
                    name="state"
                    id="state"
                    required
                    value={billingState}
                    onChange={(e) => setBillingState(e.target.value)}>
                      <option>Selecione</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                </div>
                  
                </div>
                <div className='payment-form'>
                  <div className='form-top'>
                    <MdPayment className='card-icon'/>
                    <h3>Dados de Pagamento</h3>
                  </div>
                  <div id='PaymentForm'>
                    <div className='cardState'>
                    <Cards
                    number={creditCardNumber.replace(/[^?0-9]/g, "")}
                    expiry={creditCardExpiration.replace(/[^?0-9]/g, "")}
                    name={creditCardHolderName}
                    />
                    </div>
                  </div>
                  <div className='label-input'>
                    <label htmlFor="credit-card-holder-number">Número do cartão</label>
                    <InputMask
                    mask="9999.9999.9999.9999"
                    type="text"
                    name="credit-card-holder-number"
                    id="credit-card-holder-number"
                    value={creditCardNumber}
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                    />
                  </div>

                  <div className='label-input'>
                    <label htmlFor="credit-card-holder-name">Titular do cartão</label>
                    <input
                    type="text"
                    name="credit-card-holder-name"
                    id="credit-card-holder-name"
                    value={creditCardHolderName}
                    onChange={(e) => setCreditCardHolderName(e.target.value)}
                    />
                  </div>                  

                  <div className='englobe'>

                    <div className='label-input'>
                      <label htmlFor="credit-card-holder-expiration">Validade do cartão (MM/AA)</label>
                      <InputMask
                      mask="99/99"
                      type="text"
                      name="credit-card-holder-expiration"
                      id="credit-card-holder-expiration"
                      value={creditCardExpiration}
                      onChange={(e) => setCreditCardExpiration(e.target.value)}
                      />
                    </div>

                    <div className='label-input'>
                      <label htmlFor="credit-card-holder-cvv">CVV</label>
                      <InputMask
                      mask="999"
                      type="text"
                      name="credit-card-holder-cvv"
                      id="credit-card-holder-cvv"
                      value={creditCardCvv}
                      onChange={(e) => setCreditCardCvv(e.target.value)}
                      />
                    </div>

                  </div>
                
                  <div className='label-input'>
                    <label htmlFor="instalments">Numero de parcelas</label>
                    <select
                      name="instalments"
                      id="instalments"
                      value={installments}
                      onChange={(e) => setInstallments(e.target.value)}>
                      <option>Selecione</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className='button'>
                    <button type="submit">CONFIRMAR COMPRA</button>
                  </div>
                  <div className='cards-image'>
                    <h4>Cartões aceitos:</h4>
                      <img src={cardsAcepts} alt="cards"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Footer/>
          </>
          )
         
}
        export default Checkout;
        