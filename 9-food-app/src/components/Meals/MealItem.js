import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  // !Import all image from our (assets) folder
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  };

  // !(toFixed(2)) will always render two decimal places from our price
  const price = `$${props.price.toFixed(2)}`;

  const images = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
  );

  // !Passing data from our (MealItem) to (CartContext)
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li>
      <Card className="bg-neutral-800 p-4">
        <div className="flex justify-between items-center gap-6">
          <div className="grid gap-6">
            <div className="grid gap-4">
              <div>
                <h1 className="text-lg font-medium">{props.name}</h1>
                <h2 className="text-sm text-neutral-400">
                  {props.description}
                </h2>
              </div>

              <span className="text-amber-300 font-bold">{price}</span>
            </div>

            <MealItemForm addToCart={addToCartHandler} />
          </div>

          <div className="rounded-full overflow-hidden flex justify-center items-center w-32 h-32 bg-[#0D0B0C] border-2 border-amber-300 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.5)]">
            <img
              className=""
              src={images["img-" + props.img + ".jpg"]}
              alt=""
            />
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MealItem;
