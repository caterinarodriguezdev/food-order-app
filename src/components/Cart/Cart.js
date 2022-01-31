import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import css from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let content = '';
  if (cartCtx.modalIsOpen) {
    content = (
      <ul className={css["cart-items"]}>
      {props.list.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </ul>
    );
    return <Modal>
      { content }
    </Modal>
  } else {
    return <h2>Add something to your cart</h2>
  }
};

export default Cart;
