import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value, count = 3) => (
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
        value={1253.543}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
