import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import styled from "./Header.module.css";
import image from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={styled.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={styled["main-image"]}>
        <img src={image} alt="This is a table of food" />
      </div>
    </>
  );
};

export default Header;
