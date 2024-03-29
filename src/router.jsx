import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Weather } from "./pages/Weather/Weather";
import { CurrentLocation } from "./Components/CurrentLocation/CurrentLocation";
import { SelectedLocation } from "./Components/SelectedLocation/SelectedLocation";
import { Users, userLoader } from "./pages/Users/Users";
import { Single, SingleLoader } from "./pages/Single/Single";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: userLoader,
        errorElement: <h3>Error !</h3>,
      },
      {
        path: "/users/:userId",
        element: <Single />,
        loader: SingleLoader,
        // errorElement: <h3>Error Single page !</h3>,
      },
      {
        path: "/weather",
        Component: Weather,
        children: [
          {
            index: true,
            Component: CurrentLocation,
          },
          {
            path: "selected-location",
            Component: SelectedLocation,
          },
        ],
      },
    ],
  },
]);
