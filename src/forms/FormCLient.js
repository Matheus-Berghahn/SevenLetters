import { useState } from 'react';
import Checkout from '../Checkout';
import './FormClient.scss';

const FormCLient = () => {

  const [data, setData] = useState({
    fullName: '',
    email: '',
    cpf: '',
  });

  const handleChange = (event) =>{
    const { name, value } = event.target;

    setData((prev) =>{
      const newData = {...prev, [name]: value};
      return newData;
    })
    setIsDisabled(!Object.values(data).every(Boolean));
  }

  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () =>{
    return Checkout(data)
  }

  return (
    <>
    <div className='checkout max-width'>
    <form>
      <div className='info-left'>
        <div className='contentForm'>
          <label htmlFor='fullName'>Nome completo</label>
          <input type="text"
          id="fullName"
          name="fullName"
          placeholder="Nome completo"
          onChange={handleChange}>
          </input>
        </div>
        <div className='contentForm'>
          <label htmlFor='cpf'>CPF</label>
            <input  type="text"
            id="cpf"
            name="cpf"
            placeholder="CPF"
            onChange={handleChange}>
          </input>
        </div>
        <div className='contentForm'>
          <label htmlFor='email'>E-mail</label>
            <input type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}>
          </input>
        </div>
      </div>
    </form>
    </div>
    <div className='buttons'>
      <button disabled={isDisabled} onClick={handleClick} className='btnCheckout'>CONFIRMAR DADOS</button>
    </div>
  </>
)};

export default FormCLient;