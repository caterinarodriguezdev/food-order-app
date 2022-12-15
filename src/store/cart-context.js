import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (itemId) => {},
  clear: () => {}
});

export default CartContext;
