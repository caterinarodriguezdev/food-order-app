import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import css from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let content = '';
  if (props.modalIsOpen) {
    content = (
      <ul className={css["cart-items"]}>
      {cartCtx.addedItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </ul>
    );
  } else {
    content = <h2>Add something to your cart</h2>
  }

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <header>My Items</header>
        {content}
      <footer>
        <div className={css.total}>
          <span>Total Amount</span>
          <span>33€</span>
        </div>
        <div className={css.actions}>
          <button className={css['button--alt']} onClick={props.onCloseModal}>Close</button>
          <button onClick={props.onOpenModal}>Order</button>
        </div>
      </footer>
    </Modal>
  );
};

export default Cart;
