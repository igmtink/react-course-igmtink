// !(useState) is one of the React Hooks
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // !(useState) it will return an array that contain a [Current Value, Update Value Function]
  // ![title] is the current value
  // ![setTitle] is a function that will update the [title]
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="bg-zinc-900 py-3 px-5 flex gap-3">
      <ExpenseDate date={props.date} time={props.time} />
      <Card className="bg-zinc-800 p-3 flex flex-1 items-center justify-between">
        <span>{title}</span>
        <span className="font-medium text-right text-blue-500 w-16">
          ${props.amount}
        </span>
      </Card>

      {/* !Button (onClick) event handler */}
      <button
        className="bg-blue-500 py-1 px-4 rounded-md"
        onClick={clickHandler}
      >
        Click!
      </button>
    </Card>
  );
};

export default ExpenseItem;
