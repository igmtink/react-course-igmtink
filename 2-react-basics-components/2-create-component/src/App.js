// !Importing Component
import ExpenseItem from "./components/ExpenseItem";

function App() {
  // !JavaScript Code

  return (
    <main className="w-[640px] max-w-full p-6 mx-auto">
      <div className="grid gap-4">
        {/* !Accessing in Component */}
        <ExpenseItem></ExpenseItem>
      </div>
    </main>
  );
}

export default App;
