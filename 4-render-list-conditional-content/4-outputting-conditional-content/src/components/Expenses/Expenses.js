import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  // !NOTE: We can code a (HTML) inside our (Component / Function) even we are not inside on our (return)

  // !Create (expensesContent) variable which contain (HTML) code
  let expensesContent = (
    <div className="grid place-items-center absolute inset-0 bottom-[202px] bg-transparent pointer-events-none">
      <p className="text-center font-medium">No Expenses Found.</p>
    </div>
  );

  // !Condition if (Expenses) array have a item
  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        /* (key) is a special prop for array, whenever you create a new (Expense Item) you will need to assign a (unique id) */
        key={expense._id}
        date={expense.date}
        time={expense.time}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }

  return (
    <div className="grid gap-3">
      {
        /* !Using (AND) operator if the condition is true then return the next condition */
        /* props.items.length === 0 && <p>No Expenses Found.</p> */
        /* !This is a ternary (if-else) expression syntax */
        // props.items.length === 0 ? (
        //   <div className="grid place-items-center absolute inset-0 bottom-[202px] bg-transparent pointer-events-none">
        //     <p className="text-center font-medium">No Expenses Found.</p>
        //   </div>
        // ) : (
        /* !(map()) is an array function that can create a new array that getting all value from old array into new array  */
        /* !This is like an a loop, it will create a new (ExpenseItem) component many as list array */
        //   props.items.map((expense) => (
        //     <ExpenseItem
        //       /* (key) is a special prop for array, whenever you create a new (Expense Item) you will need to assign a (unique id) */
        //       key={expense._id}
        //       date={expense.date}
        //       time={expense.time}
        //       title={expense.title}
        //       amount={expense.amount}
        //     />
        //   ))
        // )
      }
      {expensesContent}
    </div>
  );
};

export default Expenses;
