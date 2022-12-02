import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="grid gap-4">
      <ExpenseItem
        date={props.items[0].date}
        time={props.items[0].time}
        title={props.items[0].title}
        amount={props.items[0].amount}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;
