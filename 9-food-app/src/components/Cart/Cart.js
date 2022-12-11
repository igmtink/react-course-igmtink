import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

// const DUMMY_MEALS = [
//   {
//     id: "c1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "c2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
// ];

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // !Add quantity on the current (Cart Item), by increasing by 1
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((cart) => (
    // !(function.bind()) is for future execution, because the (onClick) that have (Function Handler with Arguments or Data) is will be auto call (Function)
    <CartItem
      key={cart.id}
      name={cart.name}
      price={cart.price}
      amount={cart.amount}
      onRemove={onRemoveHandler.bind(null, cart.id)}
      onAdd={onAddHandler.bind(null, cart)}
    />
  ));

  return (
    <>
      <Modal
        onClick={props.onClick}
        className="bg-neutral-900 p-4 animate-slide-down z-50"
      >
        <section className="grid gap-6">
          {hasItems && <ul className="grid gap-6">{cartItems}</ul>}
          <div className="grid gap-4 border-t-neutral-800 border-t-2 pt-2">
            <div className="justify-self-end">
              <span>{`Total Amount: ${totalAmount}`}</span>
            </div>
            <div className="flex gap-2 justify-self-end">
              <Button
                onClick={props.onClick}
                className="bg-red-500 hover:bg-red-600 transition-colors rounded-md py-2 px-4"
              >
                Close
              </Button>
              {hasItems && (
                <Button className="bg-amber-300 hover:bg-amber-400 transition-colors text-neutral-900 rounded-md py-2 px-4">
                  Order
                </Button>
              )}
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default Cart;
