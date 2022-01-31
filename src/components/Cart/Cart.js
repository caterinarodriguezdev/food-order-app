import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import CartItem from "./CartItem";
import RegularModal from "../UI/Modal";

import css from "./Cart.module.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  let content = '';
  if (cartCtx.modalIsOpen) {
    content = (
      <ul className={css["cart-items"]}>
      {cartCtx.addedMeals.map((item) => (
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
    <>
      <header>My Items</header>
      <RegularModal>
        {content}
      </RegularModal>
      <footer className={css.actions}>
        <span className={css.total}>Total Amount </span>
        <button>Close</button>
        <button>Order</button>
      </footer>
    </>
  );
};

export default Cart;
