import { useContext, useState } from 'react';

import CartContext from '../../store/cart-context';

import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Checkout from './Checkout';

import css from "./Cart.module.css";

const Cart = (props) => {
  // CONTEXT
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}€`;

  // STATE
  const [ordering, setOrdering] = useState(false);


  // CONTEXT HANDLERS
  const addHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  }
  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  }


  const orderHandler = () => {
    setOrdering(true)
  }
  const submitUserHandler = (userData) => {
    fetch('https://react-food-order-app-8708c-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }
  
  const modalActions = (
    <div className={css.actions}>
          <button className={css['button--alt']} onClick={props.onCloseModal}>
            <span>Close</span>
          </button>
          {hasItems && (
            <button className={css.button} onClick={orderHandler}>
              Order
            </button>)
          }
    </div>
  );

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
       {ordering && <Checkout onConfirm={submitUserHandler} onCancel={props.onCloseModal}/>}
       {!ordering && modalActions}
      </footer>
    </Modal>
  );
};

export default Cart;
