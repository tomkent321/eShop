import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider.js' 
import {getBasketTotal}  from './reducer.js'

function Subtotal({count}) {
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({count} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' name='' id='' /> This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
