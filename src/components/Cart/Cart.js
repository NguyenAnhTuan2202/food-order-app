import styled from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItem = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const removeItem = (id) => {
    cartCtx.removeItem(id);
  };
  const addItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={styled["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItem.bind(null, item.id)}
          onAdd={addItem.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItem}
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styled.actions}>
        <button onClick={props.onHideCart} className={styled["button--alt"]}>
          Close
        </button>
        {hasItem && <button className={styled.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
