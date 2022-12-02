import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="grid gap-3">
      {/* !(map()) is an array function that can create a new array that getting all value from old array into new array  */}
      {/* !This is like an a loop, it will create a new (ExpenseItem) component many as list array */}
      {props.items.map((expense) => (
        <ExpenseItem
          date={expense.date}
          time={expense.time}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
