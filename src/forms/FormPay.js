const produtos = {
    nome: 'teste',
    preco: 500
}

const FormCLient = () => {

  return (
    <div className='checkout max-width'>
    <form >
      <div className='info-left'>
        <div className='optionCheckout'>
          <div>
            <input type="radio"
            className='radio'
            id="card"
            name="pay"
            value="card">
            </input>
            <label htmlFor='card'>Cartão de Crédito</label>
          </div>
          <div>
          {/* <img src={card01} alt="card1"/> */}
          </div>
        </div>
        <div className='optionCheckout'>
          <input  type="radio"
          className='radio'
          id="boleto"
          name="pay"
          value="boleto">
        </input>
          <label htmlFor='boleto'>Boleto</label>
        </div>
        <div className='optionCheckout'>
          <input type="radio"
          className='radio'
          id="pix"
          name="pay"
          value="pix">
        </input>
          <label htmlFor='pix'>PIX</label>
        </div>
      </div>
    </form>
  </div>
)};

export default FormCLient;