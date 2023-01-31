import React, { useState, useEffect } from 'react';
import './Checkout.scss';
import { FaUser } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Footer from './Footer';


// import card01 from "./assets/images/card01.png";

const produtos = [
  { nome: 'A Game of Thrones', quantidade: 10 }
];

function Checkout() {
  const [firstForm, setFirstForm] = useState(true);
  const [secondForm, setSecondForm] = useState(false);
  const [data, setData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleFirstForm = e => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    setIsDisabled(!Object.values(data).every(Boolean));
  };
  console.log(data.CEP)

  const handleSecondForm = e => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
const options = [];
produtos.forEach(produto => {
  for (let i = 0; i <= produto.quantidade; i++) {
    options.push(<option value={i}>{i}</option>);
  }
});

const [apiData, setApi] = useState([]);

useEffect(() => {
  let cep = 93602210
  const fetchData = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const apiData = await response.json();
      setApi(apiData);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);

console.log(apiData)






  return (
      <>
    <div className='max-width'>
      <div className='checkout'>
        <div className='info-left'>
          <div className='align-header'>
              <div>
                <h2>INFORMAÇÕES PESSOAIS</h2>
              </div>
              <div className='icons-group'>
                <h2 className='icon'><FaUser /></h2>
                <h2 className='icon'><MdLocationOn /></h2>
                <h2 className='icon'><FaCreditCard /></h2>
                <span></span>
              </div>
          </div>
        
        <div className='forms'>
        {firstForm && (
        <form onSubmit={e => setFirstForm(false)}>
          <label htmlFor='nome'>NOME COMPLETO</label>
          <input
            type="text"
            id='nome'
            name="nome"
            onChange={handleFirstForm}
          />
          <label htmlFor='email'>E-MAIL</label>
          <input
            id='email'
            type="text"
            name="e-mail"
            onChange={handleFirstForm}
          />
          <label htmlFor='CPF'>CPF</label>
          <input
            id='CPF'
            type="number"
            name="CPF"
            onChange={handleFirstForm}
          />
          <label htmlFor='telefone'>TELEFONE</label>
          <input
            id='telefone'
            type="text"
            name="telefone"
            onChange={handleFirstForm}
          />
          <button disabled={isDisabled} type="submit">CONFIRMAR DADOS</button>
        </form>
      )}
      {!firstForm && (
        <form onSubmit={e => handleSecondForm(e)}>
          <label htmlFor='cep'>CEP</label>
          <input
            id='cep'
            type="text"
            name="CEP"
            placeholder="Ex. 12345000"
            onChange={handleSecondForm}
          />
          <label htmlFor='estado'>Estado</label>
          <input
            id='estado'
            type="text"
            name="estado"
            onChange={handleSecondForm}
          />
          <label htmlFor='cidade'>Cidade</label>
          <input
            id='cidade'
            type="text"
            name="cidade"
            onChange={handleSecondForm}
          />
          <label htmlFor='bairro'>Bairro</label>
          <input
            id='bairro'
            type="text"
            name="bairro"
            onChange={handleSecondForm}
          />
          <label htmlFor='numero'>Número da residência</label>
          <input
            id='numero'
            type="text"
            name="numero"
            placeholder="Número ou s/n"
            onChange={handleSecondForm}
          />
          <label htmlFor='complemento'>Complemento</label>
          <input
            id='complemento'
            type="text"
            name="numero"
            placeholder="Apartamento, slaa, conjunto, edifício, andar, etc."
            onChange={handleSecondForm}
          />
          <span>
          <button type="submit">VOLTAR</button>
          <button type="submit">CONFIRMAR DADOS</button>
          </span>
        </form>
      )}
        </div>
        </div>
        <div className='info-rigth'>
        <h2>DETALHES DA COMPRA</h2>
        <span className='saparation'></span>
        <div className='contentBox'>
          <p>teste</p>
          <div className='labelQuant'>
            <label htmlFor='quant'>Quantidade</label>
            <select type="select" id="quant" name="quant" min="0" required>
            {options}
            </select>
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
    <Footer />
    </>

  );
}

export default Checkout;