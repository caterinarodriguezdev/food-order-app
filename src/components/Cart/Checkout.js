import { useState, useRef } from 'react';
import css from "./Checkout.module.css";

const isEmpty = value => value.trim() === '';
const hasFiveNumbers = value => value.trim().length === 5;

const Checkout = (props) => {

  const [formInputsValidity, setFormInputsValidity] = useState({
    username: true,
    street: true,
    postalCode: true,
    city: true
  });

    // REFs
  const usernameRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const confirmHandler = async (event) => {
    event.preventDefault();
    // INPUTS VALUES
    const username = usernameRef.current.value;
    const street = streetRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityRef.current.value;

    // VALIDATE INPUTS
    const usernameIsValid = !isEmpty(username);
    const streetIsValid = !isEmpty(street);
    const postalCodeIsValid = !isEmpty(street) && hasFiveNumbers(postalCode);
    const cityIsValid = !isEmpty(city);

    setFormInputsValidity({
      username: usernameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid
    })

    const formIsValid = usernameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }
  
    // ORDER OBJECT
    const user = {};
    user.username = username;
    user.street = street;
    user.postalCode = postalCode;
    user.city = city;

    props.onConfirm(user);
   
  }

  return (
      <form className={css.form} onSubmit={confirmHandler}>
        <div className={`${css.control} ${formInputsValidity.username ? '' : css.invalid}`}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={usernameRef}/>
          {!formInputsValidity.username && <p>Name is empty, please fill in.</p>}
        </div>
        <div className={`${css.control} ${formInputsValidity.street ? '' : css.invalid}`}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={streetRef}/>
          {!formInputsValidity.street && <p>Street is empty, please fill in.</p>}
        </div>
        <div className={`${css.control} ${formInputsValidity.postalCode ? '' : css.invalid}`}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalCodeRef}/>
          {!formInputsValidity.postalCode && <p>Postal code is incorrect, please check again.</p>}
        </div>
        <div className={`${css.control} ${formInputsValidity.city ? '' : css.invalid}`}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityRef}/>
          {!formInputsValidity.city && <p>City is empty, please fill in.</p>}
        </div>
        <div className={css.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
      <button className={css.submit}>Confirm</button>
        </div>
      </form>
    );
}

export default Checkout;