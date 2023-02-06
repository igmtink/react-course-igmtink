import { redirect } from "react-router-dom";

// !Expiration (Authorization Token)
export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

// !To get (Authorization Token) from (localStorage)
export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  // !To check (Authorization Token) is (EXPIRED)
  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

// !To get (Authorization Token) to update (UI) states
export const tokenLoader = () => {
  return getAuthToken();
};

// !To check if it has (Authorization Token) to access the (Authorize Page)
export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};
