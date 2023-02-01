import { Fragment } from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const Root = (props) => {
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
