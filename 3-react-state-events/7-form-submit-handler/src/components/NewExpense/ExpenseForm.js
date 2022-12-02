import { useReact, useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // !Get the value of (input) text
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // !Form (submit) handler
  const submitHandler = (event) => {
    // !Default JavaScript Behavior for preventing refreshing (website)
    event.preventDefault();

    // !Collect all data from user (input)
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="grid gap-4">
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
              type="number"
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
              onChange={dateChangeHandler}
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
