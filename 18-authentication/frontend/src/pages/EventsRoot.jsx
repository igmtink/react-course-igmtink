const { Fragment } = require("react");
const { Outlet } = require("react-router-dom");

const EventsRoot = (props) => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default EventsRoot;
