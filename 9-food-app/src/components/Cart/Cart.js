import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const DUMMY_MEALS = [
  {
    id: "c1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "c2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
];

const Cart = (props) => {
  const cartItems = DUMMY_MEALS.map((cart) => (
    <li key={cart.id}>{cart.name}</li>
  ));

  return ReactDOM.createPortal(
    <Modal
      onClick={props.onClick}
      className="bg-neutral-900 p-4 animate-slide-down"
    >
      <section className="grid gap-6">
        <ul>{cartItems}</ul>
        <div className="grid gap-4 border-t-neutral-800 border-t-2 pt-2">
          <div className="justify-self-end">
            <span>Total Amount: $490</span>
          </div>
          <div className="flex gap-2 justify-self-end">
            <Button
              onClick={props.onClick}
              className="bg-red-500 hover:bg-red-600 transition-colors rounded-md py-2 px-4"
            >
              Close
            </Button>
            <Button className="bg-amber-300 hover:bg-amber-400 transition-colors text-neutral-900 rounded-md py-2 px-4">
              Order
            </Button>
          </div>
        </div>
      </section>
    </Modal>,
    document.getElementById("modal-root")
  );
};

export default Cart;
