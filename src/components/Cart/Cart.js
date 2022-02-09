import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import css from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}€`;

  // HANDLERS
  const addHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  }
  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  }
  
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <header>
        <h1>Cart Items</h1>
      </header>
      <ul className={css["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addHandler.bind(null, item)}
            onRemove={removeHandler.bind(null, item.id)}
          />))}
      </ul>
      {!hasItems && <h3>No items in your cart yet.</h3> }
      <footer>
        {hasItems && <div className={css.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>}
        <div className={css.actions}>
          <button className={css['button--alt']} onClick={props.onCloseModal}>Close</button>
          {hasItems && <button className={css.button}>Order</button>}
        </div>
      </footer>
    </Modal>
  );
};

export default Cart;
