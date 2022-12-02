import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // !Stored all (Expense Data) that passed from child component (ExpenseForm)
    const expenseData = {
      _id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="bg-zinc-800 p-3 rounded-md">
      {/* !We get our (Expense Data) from our child component (ExpenseForm) and pass that data to our (saveExpenseDataHandler) */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
