import { useContext } from 'react';
import CartContext from "../../../store/cart-context";

import MealItemForm from './MealItemForm';
import css from './MealItem.module.css';


const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}€`;

  const addItemHandler = (amount) => {
    const item = {
      name: props.name,
      price: props.price,
      description: props.description,
      id: props.id,
      amount: amount
    }
    cartCtx.addItem(item);
  }
  return (
    <li className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.description}>{props.description}</div>
        <div className={css.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddItem={addItemHandler}/>
    </li>
  );
}

export default MealItem;