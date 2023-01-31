import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="bg-neutral-900">
      <nav className="max-w-7xl mx-auto p-4">
        <ul className="flex justify-between items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition-colors"
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
