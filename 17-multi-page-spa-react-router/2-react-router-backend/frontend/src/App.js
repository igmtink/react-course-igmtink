import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventDetail from "./pages/EventDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:eventId",
        element: <EventDetail />,
      },
      { path: "/events/new", element: <NewEvent /> },
      { path: "/events/:eventId/edit", element: <EditEvent /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
