import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/cart-context';
import css from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numItemsAdded = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  const onClickHandler = () => {
    props.onOpenModal();
  };

  return (
    <button className={css.button} onClick={onClickHandler}>
      <span className={css.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>{numItemsAdded}</span>
    </button>
  );
}

export default HeaderCartButton;