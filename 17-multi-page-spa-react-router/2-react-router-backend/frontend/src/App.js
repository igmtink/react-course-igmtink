import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import { action as requestEventAction } from "./components/Events/EventForm";
import Newsletter, { action as newsletterAction } from "./pages/Newsleter";

const router = createBrowserRouter([
  {
    // (Root Route) of (Root)
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        // (Root Route) of (Events) we don't need a element here because we are not sharing an(Page or Components)
        path: "events",
        children: [
          {
            index: true,
            element: <Events />,
            // (loader) is a function to fetch automatic the (data) without using (useEffect)
            loader: eventsLoader,
          },
          // (Root Route) of (:eventId) so that the (loader) we automatically execute whenever we visit any (Page) children of our (Root Route) which is (:eventId)
          // (id) we need this because we are using different (custom hooks) to load our data from (loader) because our (loader) is in (Root Route)
          {
            path: ":eventId",
            id: "event-detail",
            // (loader) is a function to fetch automatic the (data) without using (useEffect)
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: requestEventAction,
              },
            ],
          },

          { path: "new", element: <NewEvent />, action: requestEventAction },
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
