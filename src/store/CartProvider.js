import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let itemExists = state.items.some((item) => {
      return item.id === action.val.id;
    });
    let updatedItems = [];
    let updatedTotalAmount = 0;
    if (!itemExists) {
      updatedItems = state.items.concat(action.val);
      updatedTotalAmount = state.totalAmount + action.val.price * action.val.amount;
      console.log(updatedTotalAmount);
      return {items: updatedItems, totalAmount: updatedTotalAmount};
    } else {
      updatedItems = state.items.map((item) => {
        if (action.val.id === item.id) {
          item.amount += action.val.amount;
        }  
        return item;     
      });
      updatedTotalAmount = state.totalAmount + action.val.price * action.val.amount;
      return {items: updatedItems, totalAmount: updatedTotalAmount};
    }
  }

  if (action.type === "REMOVE_ITEM")
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  // FUNCTIONS
  const addItem = (item) => {
    dispatchCart({type: "ADD_ITEM", val: item})
  };

  const removeItem = (itemId) => {
    dispatchCart({type: "REMOVE_ITEM", val: itemId})
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem
  }

  return <CartContext.Provider value={context}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;