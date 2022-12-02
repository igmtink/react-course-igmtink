import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // !JavaScript Code

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    expenses.push(expense);
  };

  // !Object Array
  const expenses = [];

  return (
    <main className="w-[640px] max-w-full p-6 mx-auto">
      <div>
        {/* !Components (Function / Custom HTML) with (Data) from (Object Array) passing by (Props / Function Arguments) */}
        <Expenses items={expenses} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-[640px] max-w-full mx-auto p-6">
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
    </main>
  );
};

export default App;
