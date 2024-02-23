import { Link, Outlet } from "react-router-dom";

export const Weather = () => {
  return (
    <div>
      <h2>Weather</h2>
      <ul>
        <li>
          <Link to="current-location">Current location</Link>
        </li>
        <li>
          <Link to="selected-location">Selected location</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
