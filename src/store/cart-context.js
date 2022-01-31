import { createContext, useState } from 'react';

const CartContext = createContext({
  addedMeals: [],
  modalIsOpen: false,
  toggleModal: () => {}
});

export const CartContextProvider = (props) => {
  const [addedMealsState, setAddedMealsState] = useState();
  const [modalIsOpenState, setModalIsOpenState] = useState(false);

  // HANDLERS
  const toggleModalHandler = () => {
    setModalIsOpenState(prevState => {
      return !prevState;
    })
  }

  const context = {
    addedMeals: addedMealsState,
    modalIsOpen: modalIsOpenState,
    toggleModal: toggleModalHandler
  }

  return <CartContext.Provider value={context}>
    {props.children}
  </CartContext.Provider>


}

export default CartContext;
