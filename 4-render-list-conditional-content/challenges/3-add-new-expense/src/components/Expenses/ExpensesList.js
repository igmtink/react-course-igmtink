import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // !Check the (Expenses Data) if is equal to zero, and we will return it
  if (props.items.length === 0) {
    return (
      <div className="grid place-items-center absolute inset-0 bottom-[202px] bg-transparent pointer-events-none">
        <p className="text-center font-medium">No Expenses Found.</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-3">
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
    </ul>
  );
};

export default ExpensesList;
