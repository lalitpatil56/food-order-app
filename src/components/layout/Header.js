import React from "react";
import mealsImg from "./meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImg} alt=" meals on table." />
      </div>
    </>
  );
};

export default Header;
