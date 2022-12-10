import Button from "../UI/Button";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  // !To get all data from our (Context)
  const cartCtx = useContext(CartContext);

  // !To get the total of all item on our (Cart)
  // !Using (reduce()) on our cart array to get a single type of item even we add to cart a two or more that type of item
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <Button
      className="group hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 rounded-full"
      onClick={props.onClick}
    >
      <span>
        <CartIcon />
      </span>
      <span className="text-neutral-900 group-hover:bg-amber-400 transition-colors rounded-full bg-amber-300 px-2 py-1 text-xs">
        {numberOfCartItems}
      </span>
    </Button>
  );
};

export default CartButton;
