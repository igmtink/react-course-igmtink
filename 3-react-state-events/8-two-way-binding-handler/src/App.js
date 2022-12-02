import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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
      <div>
        {/* !Components (Function / Custom HTML) with (Data) from (Object Array) passing by (Props / Function Arguments) */}
        <Expenses items={expenses} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-[640px] max-w-full mx-auto p-6">
        <NewExpense />
      </div>
    </main>
  );
};

export default App;
