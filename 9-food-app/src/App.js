import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const cartIsShowHandler = () => {
    setCartShow(true);
  };

  const closeCartHandler = () => {
    setCartShow(false);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartHandler();
    }
  });

  return (
    <CartProvider>
      <main className="grid grid-cols-1 gap-8">
        {cartShow && <Cart onClick={closeCartHandler} />}
        <Header cartIsShow={cartIsShowHandler} />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
