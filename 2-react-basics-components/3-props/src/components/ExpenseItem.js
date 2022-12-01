import ExpenseDate from "./ExpenseDate";

// !React Code (JavaScript with HTML)
function ExpenseItem(props) {
  // !HTML Code
  return (
    // !{variable} to pass a (JavaScript) code to (HTML) code
    // !{props} is argument that storing the data
    <div className="bg-zinc-900 py-3 px-5 rounded-md flex gap-3">
      <div className="grid gap-1">
        <span className="text-blue-500 font-medium uppercase">
          {props.date}
        </span>
        <span className="text-sm text-zinc-500">{props.time}</span>
      </div>
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
