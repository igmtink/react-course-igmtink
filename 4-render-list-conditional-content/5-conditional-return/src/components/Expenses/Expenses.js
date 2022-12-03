import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  // !We pass all (Expenses Data) on (ExpensesList) component
  return <ExpensesList items={props.items} />;
};

export default Expenses;
