import ExpenseDate from "./ExpenseDate";

// !React Code (JavaScript with HTML)
function ExpenseItem(props) {
  // !HTML Code
  return (
    // !{variable} to pass a (JavaScript) code to (HTML) code
    <div className="bg-zinc-900 py-3 px-5 rounded-md flex gap-3">
      {/* We use another (Components / Custom HTML) inside our components, and we pass the (Data) from (Apps.js) to our components (ExpenseItem) and pass it again to another components (ExpenseDate) */}
      <ExpenseDate date={props.date} time={props.time} />
      <div className="bg-zinc-800 rounded-md p-3 flex flex-1 items-center justify-between">
        <span>{props.title}</span>
        <span className="font-medium text-right text-blue-500 w-16">
          ${props.amount}
        </span>
      </div>
    </div>
  );
}

export default ExpenseItem;
