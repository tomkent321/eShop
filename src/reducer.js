//define all the application level states and define actions that can change these states

import { AssignmentReturn } from "@mui/icons-material"

// set up the inital state of the app wide data layer

export const initialState = {
  basket: [],
}

//   selector, note: 'action' is called 'dispatch' in component state

export const getBasketTotal = (basket) => {
  return(basket?.reduce((amount,item) => item.price + amount, 0))
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
      // default:
      //       return state;
  }
}

export default reducer
