import { useContext, useRef } from "react";

import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";

import css from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const enteredAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      name: props.name,
      price: props.price,
      description: props.description,
      id: props.id,
      amount: parseInt(enteredAmountRef.current.value)
    }
    cartCtx.addItem(item);
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
