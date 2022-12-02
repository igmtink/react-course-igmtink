import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // !JavaScript Code
  const [filteredYear, setFilteredYear] = useState("2020");

  // !Stored the data from child component (ExpensesFilter.js) to parent component (App.js)
  const filterChangeHandler = (selectedYear) => {
    console.log("In App.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    expenses.push(expense);
  };

  // !Object Array
  const expenses = [
    {
      title: "Desk Wallpaper",
      amount: "$2.00",
      date: new Date(),
      time: new Date(),
    },
  ];

  return (
    <main className="w-[640px] max-w-full p-6 mx-auto">
      <div className="py-6">
        {/* !{selected} we pass the (useState) filteredYear value from parent to child component */}
        {/* !{onChangeFilter} get the date from child component (ExpensesFilter.js) */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
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
