//define all the application level states and define actions that can change these states

// set up the inital state of the app wide data layer

export const initialState = {
  basket: [],
}

//   selector, note: 'action' is called 'dispatch' in component state

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
      default:
            return state;
  }
}

export default reducer
