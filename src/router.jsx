import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Weather } from "./pages/Weather/Weather";
import { CurrentLocation } from "./Components/CurrentLocation/CurrentLocation";
import { SelectedLocation } from "./Components/SelectedLocation/SelectedLocation";
import { Users, userLoader } from "./pages/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        exact: true,
        Component: About,
      },
      {
        path: "/users",
        exact: true,
        Component: Users,
        loader: userLoader,
        errorElement: <h3>Error !</h3>,
      },
      {
        path: "/:user",
        exact: true,
        Component: Users,
        loader: userLoader,
        errorElement: <h3>Error !</h3>,
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
            exact: true,
            Component: SelectedLocation,
          },
        ],
      },
    ],
  },
]);
