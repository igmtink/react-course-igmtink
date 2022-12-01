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
      <ExpenseItem
        date={props.items[1].date}
        time={props.items[1].time}
        title={props.items[1].title}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        time={props.items[2].time}
        title={props.items[2].title}
        amount={props.items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[3].date}
        time={props.items[3].time}
        title={props.items[3].title}
        amount={props.items[3].amount}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;
