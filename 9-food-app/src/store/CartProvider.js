import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // !(price * amount) to multiply the total price of the item even if the type of item is have a 3 amount on cart
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // !Find on our (State Items) if the new (Cart Item) is existed
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // !If the new (Cart Item) is existed
    // !This is like we're returing a (true)
    if (existingCartItem) {
      // !We update the (amount) of the existing (Cart Item)
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      // !We get all item on our current items (State)
      updatedItems = [...state.items];

      // !We check the existing (Cart Item) from our current items (State) and we update that item
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // !Adding a new item array, this is alternate for (Spread Operator)
      updatedItems = state.items.concat(action.item);
    }

    // !Adding a new item array, this is alternate for (Spread Operator)
    // const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    // !Decreate (totalAmount)
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      // !If the (Cart Item) is only have 1 quantity then if we remove again the 1 quantity we filter the (Cart Array) to display only the item that not equal to our current item that we are removing the quantity
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

// !This is will mange the current (Context) to data and also pass all data to all (Components) that want access to it
const CartProvider = (props) => {
  // !(useReducer) to manage our big (useState)
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  // !This allows us to wrap any (Components) that should get access to this (Context)
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
