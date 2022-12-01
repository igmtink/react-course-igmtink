import ExpenseItem from "./components/ExpenseItem";

function App() {
  // !JavaScript Code

  // !Date & Time
  const expenseDate = new Date().toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const expenseTime = new Date().toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // !Object Array
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: expenseDate,
      time: expenseTime,
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: expenseDate,
      time: expenseTime,
    },
  ];

  return (
    <main className="w-[640px] max-w-full p-6 mx-auto">
      <div className="grid gap-4">
        {/* !Passing the (Data) to (Component / Function / Custom HTML) by using (Props) */}
        <ExpenseItem
          date={expenses[0].date}
          time={expenses[0].time}
          title={expenses[0].title}
          amount={expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[1].date}
          time={expenses[1].time}
          title={expenses[1].title}
          amount={expenses[1].amount}
        ></ExpenseItem>
      </div>
    </main>
  );
}

export default App;
