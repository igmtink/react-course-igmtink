import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

// !React Code (JavaScript with HTML)
function ExpenseItem(props) {
  // !HTML Code
  return (
    // !{variable} to pass a (JavaScript) code to (HTML) code
    // !We can wrapp our (HTML) code inside of Component (Wrapper / Container) because of the special prop that built in ({props.children})
    // !Also we can set our (className) because of the special prop that built in (props.className)
    <Card className="bg-zinc-900 py-3 px-5 flex gap-3">
      {/* We use another (Components / Custom HTML) inside our components, and we pass the (Data) from (Apps.js) to our components (ExpenseItem) and pass it again to another components (ExpenseDate) */}
      <ExpenseDate date={props.date} time={props.time} />
      <Card className="bg-zinc-800 p-3 flex flex-1 items-center justify-between">
        <span>{props.title}</span>
        <span className="font-medium text-right text-blue-500 w-16">
          ${props.amount}
        </span>
      </Card>
    </Card>
  );
}

export default ExpenseItem;
