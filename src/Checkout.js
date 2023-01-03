import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          className='checkout__ad'
        />
        <div className='checkout__title'>
          <h2>Your Shopping Basket</h2>
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
