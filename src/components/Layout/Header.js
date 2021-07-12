import classes from "../Layout/Header.module.css";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpeg'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="a table full of food"/>
      </div>
    </>
  );
};

export default Header;
