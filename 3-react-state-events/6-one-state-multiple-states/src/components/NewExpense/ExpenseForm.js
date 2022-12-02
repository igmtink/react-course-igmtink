import { useReact, useState } from "react";

const ExpenseForm = () => {
  // !Using one (useState) on multiple (states)

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  // enteredTitle: "",
  // enteredAmount: "",
  // enteredDate: "",
  // });

  // !Get the value of (input) text
  const titleChangeHandler = (event) => {
    // !Update the specific (states) from one (useState)
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    // return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // !Update the specific (states) from one (useState)
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    // return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // !Update the specific (states) from one (useState)
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    // return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const testHandler = () => {
    console.log(userInput);
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
          onClick={testHandler}
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
