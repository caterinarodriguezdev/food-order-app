import css from './MealItemForm.module.css';

import Input from '../UI/Input';

const MealItemForm = () => {
    return (
      <form className={css.form}>
        <Input label="Amount" type="number"/>
        <button>+ Add</button>
      </form>
    );
}

export default MealItemForm;