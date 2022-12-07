import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (user) => {
    if (user.legnth !== 0) {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <main className="w-[640px] max-w-full p-6 mx-auto grid place-items-center h-screen">
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login login={loginHandler} />}
      </main>
    </>
  );
}

export default App;
