import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };

  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {isShowCart && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
