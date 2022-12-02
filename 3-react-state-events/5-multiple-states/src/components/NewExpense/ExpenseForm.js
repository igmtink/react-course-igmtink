import { useReact, useState } from "react";

const ExpenseForm = () => {
  // !Get the value from (input) and call the update function
  // !All value of any input is always as a (String)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // !Get the value of (input) text
  const titleChangeHandler = (event) => {
    // !Set the value of (input) text by (useState)
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <div>
      <form action="" className="grid gap-4">
        <div className="grid gap-2">
          <input
            className="w-full p-2 bg-zinc-900 rounded-md text-center"
            type="text"
            placeholder="Title"
            onChange={titleChangeHandler}
            required
          />
          <div className="flex flex-1 gap-2">
            <input
              className="w-full p-2 bg-zinc-900 rounded-md text-center"
              type="text"
              min="0.01"
              step="0.01"
              placeholder="Amount"
              onChange={amountChangeHandler}
              required
            />
            <input
              className="w-full bg-zinc-900 p-2 rounded-md text-center"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={setEnteredDate}
              required
            />
          </div>
        </div>
        <button
          className="font-medium p-3 w-full bg-blue-500 rounded-md"
          type="submit"
        >
          {/* enteredTitle - To display the keystroke */}
          ADD EXPENSE
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
