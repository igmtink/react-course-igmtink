import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="grid gap-3">
      {/* !(map()) is an array function that can create a new array that getting all value from old array into new array  */}
      {/* !This is like an a loop, it will create a new (ExpenseItem) component many as list array */}
      {props.items.map((expense) => (
        <ExpenseItem
          /* (key) is a special prop for array, whenever you create a new (Expense Item) you will need to assign a (unique id) */
          key={expense._id}
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
