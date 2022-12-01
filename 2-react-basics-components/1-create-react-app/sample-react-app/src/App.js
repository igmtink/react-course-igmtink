import ExpenseItem from "./components/ExpenseItem";

function App() {
  // !JavaScript Code

  // !Object Array
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(),
      time: new Date(),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(),
      time: new Date(),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(),
      time: new Date(),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(),
      time: new Date(),
    },
  ];

  return (
    <main className="w-[640px] max-w-full p-6 mx-auto">
      <div className="grid gap-4">
        {/* !Components (Function / Custom HTML) with (Data) from (Object Array) passing by (Props / Function Arguments) */}
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
        <ExpenseItem
          date={expenses[2].date}
          time={expenses[2].time}
          title={expenses[2].title}
          amount={expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[3].date}
          time={expenses[3].time}
          title={expenses[3].title}
          amount={expenses[3].amount}
        ></ExpenseItem>
      </div>
    </main>
  );
}

export default App;
