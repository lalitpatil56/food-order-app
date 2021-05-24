import classes from "./Checkout.module.css";
import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isMoreThan5Chars = (value) => value.trim().length > 5;

const Checkout = (props) => {
  const [cartData, setCartData] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = isMoreThan5Chars(enteredPostal);

    setCartData({
      name: nameIsValid,
      city: cityIsValid,
      postal: postalIsValid,
      street: streetIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirmOrder({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostal,
    });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${cartData.name ? "" : classes.invalid}`}
      >
        <label htmlFor="name">Name</label>
        <input type="text" ref={nameInputRef} id="name" />
        {!cartData.name && <p>Enter valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          cartData.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!cartData.street && <p>Enter valid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          cartData.postal ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!cartData.postal && <p>Enter valid postal code</p>}
      </div>
      <div
        className={`${classes.control} ${cartData.city ? "" : classes.invalid}`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!cartData.city && <p>Enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
