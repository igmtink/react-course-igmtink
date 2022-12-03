import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // !Stored all (Expense Data) that passed from child component (ExpenseForm)
    const expenseData = {
      _id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
    setEditing(false);
  };

  return (
    // !We get our (Expense Data) from our child component (ExpenseForm) and pass that data to our (saveExpenseDataHandler) */

    <div className="grid">
      {!isEditing && (
        <button
          className="justify-self-end bg-zinc-800 w-14 h-14 text-center text-blue-500 rounded-full font-bold text-2xl shadow-[0px_10px_36px_-4px_rgba(0,0,0,0.25)]"
          onClick={startEditingHandler}
        >
          +
        </button>
      )}

      {isEditing && (
        <Card className="bg-zinc-800 p-3 shadow-[0px_10px_36px_-4px_rgba(0,0,0,0.25)]">
          <ExpenseForm
            /* Passing a event handler to the child component (ExpenseForm) */
            stopEditing={stopEditingHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        </Card>
      )}
    </div>
  );
};

export default NewExpense;
