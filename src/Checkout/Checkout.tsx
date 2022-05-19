
import React from 'react';
import { UserContext } from '../Store/Contexts';
import './Checkout.css'
import trashcanIcon from '../assets/icons/trash-can-solid.svg'

export default function Checkout() {
  document.title = 'Varukorg - KeramiKarlsson';
  const [state, dispatch] = React.useContext(UserContext);
  let sum: number = 0;
  state.cart.products.forEach(x => sum += x.price);
  return (
    <div className="contact-page">
      <div className="row">
        <div className="column">
          <h2>Varukorg</h2>
          <p>Du har {state.cart.products.length} saker i varukorgen</p>

          <div className='checkout-summary checkout-summary__header'>
            <div className='bold'>Produkter</div>
            <div className='bold'>Antal</div>
            <div className='bold'>Pris</div>
            <div className='text-align-end bold'></div>
          </div>

          <div className="checkout-summary">
            {state.cart.products.map(product =>
              <>
                <div key={product.id} className="d-flex">
                  <img className="img-summary" src={product.image[0]} width="250"></img>
                  <h2 className="ml-1">{product.name}</h2>
                </div>
                <div>1 st</div>
                <div>{product.price} kr</div>
                <div className='text-align-end'><div className='align-self-center'>
                  <button className="btn-icon" onClick={() => dispatch({ type: "remove_from_cart", payload: { product: product } })}><img className='icon' src={trashcanIcon} /></button>
                </div></div></>
            )}
            <div className="grid-1-3 bold">Totalt:</div>
            <div className="bold">{sum} kr</div>
          </div>

          <div className="checkout-summary--small">
            {state.cart.products.map(product =>
              <>
                <div key={product.id} className="d-flex">
                  <img className="img-summary" src={product.image[0]} width="250"></img>
                  <div className="item-summary">
                    <div className='bold'>{product.name}</div>
                    <div>1 st <span className='float-right'>{product.price} kr</span></div>
                  </div>
                </div>
                <div className='align-self-center'>
                  <button className="btn-icon" onClick={() => dispatch({ type: "remove_from_cart", payload: { product: product } })}><img className='icon' src={trashcanIcon} /></button>
                </div>
              </>
            )}
            <div className="bold">Totalt: <span className='float-right mr-1'>{sum} kr</span></div>
          </div>
        </div>
      </div>
    </div>);
}