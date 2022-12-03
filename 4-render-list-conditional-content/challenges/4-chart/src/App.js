import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const App = () => {
  // !JavaScript Code
  const [filteredYear, setFilteredYear] = useState("2020");

  // !Get a (useState) for array
  const [expenses, setExpenses] = useState([]);

  // !Stored the data from child component (ExpensesFilter.js) to parent component (App.js)
  const filterChangeHandler = (selectedYear) => {
    console.log(`Selected Year: ${selectedYear}`);
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    // !Set new (Expense Data) on array using (useState)
    // !For displaying a new (Expense Data) from array, we set first the (New Expense Data) the we use (Rest Operator) to get all (Previous Expense Data)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // !Filtering the array of object (expenses)
  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.date.toLocaleDateString("en-us", {
        year: "numeric",
      }) === filteredYear
    );
  });

  // !Sort the the array by dates
  filteredExpenses.sort(
    // !Get only the (Date) value pass it with two parameters and substract it and it will return an array again
    (date1, date2) => date1.date - date2.date
  );

  return (
    <main className="w-[640px] max-w-full p-6 mx-auto">
      <div className="pb-[202px]">
        <div className="pt-6 pb-3">
          {/* !{selected} we pass the (useState) filteredYear value from parent to child component */}
          {/* !{onChangeFilter} get the date from child component (ExpensesFilter.js) */}
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        </div>
        <div className="pt-3 pb-6">
          <ExpensesChart expenses={filteredExpenses} />
        </div>
        <div className="">
          {/* !Components (Function / Custom HTML) with (Data) from (Object Array) passing by (Props / Function Arguments) */}
          <Expenses items={filteredExpenses} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-[640px] max-w-full mx-auto p-6">
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
    </main>
  );
};

export default App;
