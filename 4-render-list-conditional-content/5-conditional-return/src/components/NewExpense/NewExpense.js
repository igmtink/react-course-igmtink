import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

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
    // !We get our (Expense Data) from our child component (ExpenseForm) and pass that data to our (saveExpenseDataHandler) */
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  );
};

export default NewExpense;
