import { useRef } from "react";

import Input from "../../UI/Input";

import css from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const enteredAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddItem(+enteredAmountRef.current.value);
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: `am_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
        ref={enteredAmountRef}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
