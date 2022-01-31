import css from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <div className={css['cart-item']}>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className={css.summary}>{props.description}</div>
      <div className={css.price}>{props.price}</div>
      <div className={css.amount}></div>
      <div className={css.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default CartItem;