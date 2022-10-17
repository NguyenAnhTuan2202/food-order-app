import React from "react";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import styled from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  const btnStyled = `${styled.button} ${btnIsHighlighted ? styled.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div className={btnStyled} onClick={props.onShowCart}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span>Your cart </span>
      <span className={styled.badge}>{numberOfCartItems}</span>
    </div>
  );
};

export default HeaderCartButton;
