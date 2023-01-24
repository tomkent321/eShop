//define all the application level states and define actions that can change these states

// set up the inital state of the app wide data layer

export const initialState = {
  basket: [],
}

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0)
}

//   selector, note: 'action' is called 'dispatch' in component state

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )
      let newBasket = [...state.basket]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id: ${action.id})`)
      }
      return {
        ...state,
        basket: newBasket,
      }
    default:
      return state
  }
}

export default reducer
