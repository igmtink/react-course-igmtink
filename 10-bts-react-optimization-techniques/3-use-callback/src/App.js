import { useState, useCallback } from "react";
import DemoOutput from "./components/DemoOutput";
import { Button } from "./components/UI/UIShared";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    // !This is like (classList.toggle) on DOM
    // !This is will not activate on the first running the app, because we don't have a (Previous State) in the first place
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="w-[640px] max-w-full mx-auto p-6 flex justify-center items-center h-screen">
      <div className="bg-neutral-800 p-4 rounded-md shadow-xl grid grid-cols-1 gap-4 justify-items-center items-center">
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-lg font-bold">Hi there!</h1>
          <DemoOutput show={false} />
        </div>
        <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
      </div>
    </div>
  );
}

export default App;
