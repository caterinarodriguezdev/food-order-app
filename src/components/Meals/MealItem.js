import css from './MealItem.module.css';

import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  return (
    <li key={props.id} className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.description}>{props.description}</div>
        <div className={css.price}>{props.price}€ </div>
      </div>
      <MealItemForm/>
    </li>
  );
}

export default MealItem;