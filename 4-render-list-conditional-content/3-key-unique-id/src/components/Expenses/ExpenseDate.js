const ExpenseDate = (props) => {
  // !Date & Time
  const expenseDate = props.date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const expenseTime = new Date().toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="grid gap-1">
      <span className="text-blue-500 font-medium uppercase">{expenseDate}</span>
      <span className="text-sm text-zinc-500">{expenseTime}</span>
    </div>
  );
};

export default ExpenseDate;
