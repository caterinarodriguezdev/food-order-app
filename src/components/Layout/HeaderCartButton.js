import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/cart-context';
import css from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numItemsAdded = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  const onClickHandler = () => {
    props.onOpenModal();
  };

  let btnClasses = `${css.button} ${btnIsHighlighted ? css.bump : ''}`;
  const {items} = cartCtx;

  useEffect(() => {
    let time;
    if (items.length > 0) {
      setBtnIsHighlighted(true);
      time = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300)
    }
    return () => {
      clearTimeout(time);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClickHandler}>
      <span className={css.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>{numItemsAdded}</span>
    </button>
  );
}

export default HeaderCartButton;