import Button from "../UI/Button";
import Input from "../UI/Input";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between">
      <div className="grid gap-2">
        <h1 className="text-lg font-medium">{props.name}</h1>
        <div className="flex gap-2">
          <Button
            onClick={props.onRemove}
            className="bg-red-500 hover:bg-red-600 transition-colors px-3 py-1 rounded-md"
          >
            -
          </Button>
          <Button
            onClick={props.onAdd}
            className="bg-green-500 hover:bg-green-600 transition-colors px-3 py-1 rounded-md"
          >
            +
          </Button>
        </div>
      </div>
      <div className="grid gap-2 justify-items-end">
        <span className="text-amber-300 font-bold">{price}</span>
        <span className="bg-neutral-800 text-center w-14 rounded-md p-2">
          x{props.amount}
        </span>
      </div>
    </li>
  );
};

export default CartItem;
