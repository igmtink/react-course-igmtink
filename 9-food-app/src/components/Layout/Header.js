import mealsHeader from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton";

const Header = (props) => {
  return (
    <header className="">
      <div className="w-[640px] max-w-full mx-auto grid gap-4">
        <nav className="flex justify-between items-center p-4">
          <h1 className="font-bold">React Meals</h1>
          <CartButton onClick={props.cartIsShow} />
        </nav>
        <div>
          <img src={mealsHeader} alt="Meals" />
        </div>
        <div className="grid gap-3 p-4">
          <h2 className="text-5xl font-bold">Extraordinary Food Service</h2>
          <p>
            be the first to try this service in your city, surprise people
            around you.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
