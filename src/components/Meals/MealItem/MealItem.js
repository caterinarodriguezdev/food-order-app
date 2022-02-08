import css from './MealItem.module.css';

import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const price = `${props.price.toFixed(2)}€`;

  return (
    <li className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.description}>{props.description}</div>
        <div className={css.price}>{price}</div>
      </div>
      <MealItemForm 
        id={props.id}
        name={props.name}
        price={props.price}
        description={props.description}
      />
    </li>
  );
}

export default MealItem;