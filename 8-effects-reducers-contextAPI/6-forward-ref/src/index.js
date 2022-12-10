import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // !We wrapp our (App) on our Context API (AuthContextProvider) so we can pass all value from our (Context API) to Component (App)
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
