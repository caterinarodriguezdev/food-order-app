import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import css from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let content = '';
  if (props.onOpenModal) {
    content = (
      <ul className={css["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          amount={item.amount}
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
          <span>{cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={css.actions}>
          <button className={css['button--alt']} onClick={props.onCloseModal}>Close</button>
          <button>Order</button>
        </div>
      </footer>
    </Modal>
  );
};

export default Cart;
