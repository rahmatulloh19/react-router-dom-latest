import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Weather } from "./pages/Weather/Weather";
import { CurrentLocation } from "./Components/CurrentLocation/CurrentLocation";
import { SelectedLocation } from "./Components/SelectedLocation/SelectedLocation";

export const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
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
        path: "/weather",
        Component: Weather,
        children: [
          {
            path: "current-location",
            exact: true,
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
