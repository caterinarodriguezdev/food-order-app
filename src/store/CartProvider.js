import { useReducer } from "react";
import CartContext from "./cart-context";

// REDUCER
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.val.price * action.val.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.val.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.val.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.val);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.val
      );
    const cartItem = state.items[cartItemIndex];
    const updatedTotalAmount = state.totalAmount - cartItem.price;

    let updatedItems = [...state.items];
    
    if (cartItem.amount === 1) {
      updatedItems = updatedItems.filter(item => item.id !== cartItem.id);
    } else {
      const updatedItem = {
        ...cartItem,
        amount: cartItem.amount - 1,
      };
      updatedItems[cartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// PROVIDER
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  // FUNCTIONS
  const addItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", val: item });
  };

  const removeItem = (itemId) => {
    dispatchCart({ type: "REMOVE_ITEM", val: itemId });
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
