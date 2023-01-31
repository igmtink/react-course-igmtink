import { Fragment } from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const Root = (props) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Root;
