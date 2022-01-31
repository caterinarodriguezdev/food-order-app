import css from './MealItemForm.module.css';

import Input from '../UI/Input';

const MealItemForm = () => {
    return (
      <form className={css.form}>
        <Input label="Amount" input={{
          id: "amount",
          type: "number",
          min: '1',
          max: '5',
          defaultValue: '1'
        }}/>
        <button>+ Add</button>
      </form>
    );
}

export default MealItemForm;