import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // !(Local Storage) of browser that you can get the stored data
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  // !(useEffect) to control the codes run
  // !To avoid infinite loop
  useEffect(() => {
    // !We check on our (Local Storage) if the (isLoggedIn === 1) then we set our useState (isLoggedIn === true), this is like we checking user logged in session if they already logged in
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }

    // !This (useEffect) would only run once when the app starts, if only don't have a dependencies
    // !This (useEffect) would run again but only if our ([]) dependencies also changed
  }, []);

  const loginHandler = (user) => {
    if (user.legnth !== 0) {
      // !(Local Storage) of browser that you can stored data
      // !After the user logged in we set on our (Local Storage) (isLoggedIn = 1) so we can save they logged in session
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    }
  };

  const logoutHandler = () => {
    // !To remove item (Local Storage)
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <main className="w-[640px] max-w-full p-6 mx-auto grid place-items-center h-screen">
        {isLoggedIn && <Home logout={logoutHandler} />}
        {!isLoggedIn && <Login login={loginHandler} />}
      </main>
    </>
  );
}

export default App;
