import { Fragment, useEffect } from "react";

import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Header from "../components/Layout/Header";
import { getTokenDuration } from "../util/auth";

const Root = (props) => {
  const token = useLoaderData();
  const submit = useSubmit();

  // Automatically (Logout)
  useEffect(() => {
    if (!token) {
      return;
    }

    // !If the (Authorization Token) is (EXPIRED) it will automatic execute (logout action)
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <Fragment>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Root;
