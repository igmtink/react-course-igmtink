import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // !JavaScript Code
  const [filteredYear, setFilteredYear] = useState("2020");

  // !Get a (useState) for array
  const [expenses, setExpenses] = useState([]);

  // !Stored the data from child component (ExpensesFilter.js) to parent component (App.js)
  const filterChangeHandler = (selectedYear) => {
    console.log("In App.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);

    // !Set new (Expense Data) on array using (useState)
    // !For displaying a new (Expense Data) from array, we set first the (New Expense Data) the we use (Rest Operator) to get all (Previous Expense Data)
    setExpenses((prevExpenses) => {
      const expensesData = [expense, ...prevExpenses];

      // !Sort the the array by dates
      const dateSorted = expensesData.sort(
        // !Get only the (Date) value pass it with two parameters and substract it and it will return an array again
        (date1, date2) => date1.date - date2.date
      );

      console.log(dateSorted);
      // !Reverse the final result of sorting
      return dateSorted.reverse();
    });
  };

  return (
    <main className="w-[640px] max-w-full p-6 mx-auto">
      <div className="pb-[200px]">
        <div className="py-6">
          {/* !{selected} we pass the (useState) filteredYear value from parent to child component */}
          {/* !{onChangeFilter} get the date from child component (ExpensesFilter.js) */}
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        </div>
        <div className="">
          {/* !Components (Function / Custom HTML) with (Data) from (Object Array) passing by (Props / Function Arguments) */}
          <Expenses items={expenses} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-[640px] max-w-full mx-auto p-6">
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
    </main>
  );
};

export default App;
