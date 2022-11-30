function ExpenseItem() {
  const expenseDate = new Date().toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const expenseTime = new Date().toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="bg-zinc-900 p-3 rounded-md flex justify-between items-center">
      <div className="flex items-center">
        <div className="justify-self-start grid gap-1 border-r-2 border-zinc-800 pr-3">
          <span className="text-lg text-blue-500 font-bold">{expenseDate}</span>
          <span className="text-gray-400">{expenseTime}</span>
        </div>
        <div className="px-3">
          <h1 className="text-lg">{expenseTitle}</h1>
        </div>
      </div>
      <div className="justify-self-end bg-blue-500 p-3 rounded-sm">
        <span>${expenseAmount}</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
