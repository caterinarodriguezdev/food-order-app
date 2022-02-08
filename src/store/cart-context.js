import { createContext, useState } from 'react';

const CartContext = createContext({
  addedItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (itemId) => {}
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState();
  // const [amount, setAmount] = useState();

  // FUNCTIONS
  const addItem = (item) => {
    setItems((prevItems) => {
      return prevItems.concat(item);
    });
    // setAmount((prevAmount) => {
    //   return prevAmount + item.price;
    // });
  };
  const removeItem = (itemId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== itemId
      });
    });
    // setAmount((prevAmount) => {
    //   return prevAmount - itemId.price;
    // });
  };

  const context = {
    addedItems: items,
    totalAmount: 0,
    addItem,
    removeItem
  }

  return <CartContext.Provider value={context}>
    {props.children}
  </CartContext.Provider>


}

export default CartContext;
