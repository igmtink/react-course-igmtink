import { useState, useCallback, useMemo } from "react";
import DemoList from "./components/DemoList";
import { Button } from "./components/UI/UIShared";

function App() {
  const [title, setTitle] = useState(false);

  console.log("APP RUNNING");

  const setTitleHandler = useCallback(() => {
    setTitle("New Title");
  }, []);

  const listItem = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="w-[640px] max-w-full mx-auto p-6 flex justify-center items-center h-screen">
      <div className="w-[640px] max-w-full mx-auto bg-neutral-800 p-4 rounded-md shadow-xl grid grid-cols-1 gap-4 justify-items-center items-center">
        <DemoList title={title} items={listItem} />
        <Button onClick={setTitleHandler}>Change Title</Button>
      </div>
    </div>
  );
}

export default App;
