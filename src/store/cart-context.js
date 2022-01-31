import { createContext, useState } from 'react';

const CartContext = createContext({
  addedMeals: [],
  modalIsOpen: false
});

export const CartContextProvider = (props) => {
  const [addedMealsState, setAddedMealsState] = useState();
  const [modalIsOpenState, setModalIsOpenState] = useState();

  // HANDLERS
  

  const context = {
    addedMeals: addedMealsState,
    modalIsOpen: modalIsOpenState
  }

  return <CartContext.Provider value={context}>
    {props.children}
  </CartContext.Provider>


}

export default CartContext;
