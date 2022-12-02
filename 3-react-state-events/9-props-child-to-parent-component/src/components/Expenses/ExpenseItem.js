import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="bg-zinc-900 py-3 px-5 flex gap-3">
      <ExpenseDate date={props.date} time={props.time} />
      <Card className="bg-zinc-800 p-3 flex flex-1 items-center justify-between">
        <span>{props.title}</span>
        <span className="font-medium text-right text-blue-500 w-16">
          ${props.amount}
        </span>
      </Card>
    </Card>
  );
};

export default ExpenseItem;
