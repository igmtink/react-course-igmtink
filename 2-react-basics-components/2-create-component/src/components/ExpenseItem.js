// !React Code (JavaScript with HTML)
function ExpenseItem(props) {
  // !HTML Code
  return (
    // !{variable} to pass a (JavaScript) code to (HTML) code
    <div className="bg-zinc-900 py-3 px-5 rounded-md flex gap-3">
      {/* We use another (Components / Custom HTML) inside our components, and we pass the (Data) from (Apps.js) to our components (ExpenseItem) and pass it again to another components (ExpenseDate) */}
      <div className="grid gap-1">
        <span className="text-blue-500 font-medium uppercase">DEC 1</span>
        <span className="text-sm text-zinc-500">10:52 AM</span>
      </div>
      <div className="bg-zinc-800 rounded-md p-3 flex flex-1 items-center justify-between">
        <span>Car Insurance</span>
        <span className="font-medium text-right text-blue-500 w-16">
          $294.67
        </span>
      </div>
    </div>
  );
}

export default ExpenseItem;
