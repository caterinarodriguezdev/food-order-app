import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/cart-context';

import css from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);

  const onClickHandler = () => {
    cartCtx.modalIsOpen = true;
  };

  return (
    <button className={css.button} onClick={onClickHandler}>
      <span className={css.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;