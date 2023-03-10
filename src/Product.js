import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider.js'


//the following is a destructure of:
// function Product(props) {
function Product({ id, title, price, rating, image }) {

//connects to data layer   
const [state, dispatch] = useStateValue()

const addToBasket = () => {
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
      key: id,
    },
  })
}

  return (
    <div className='product' key={id}>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>{' '}
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
            <h5>#{id}</h5>
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
