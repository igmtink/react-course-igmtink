import { NavLink } from "react-router-dom";
import NewsletterSignup from "../Newsletter/NewsletterSignup";

const Header = (props) => {
  return (
    <header className="bg-neutral-900 shadow-xl">
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
          <div className="flex gap-4">
            <li>
              <NavLink
                to="events"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500"
                    : "hover:text-yellow-500 transition-colors"
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="newsletter"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500"
                    : "hover:text-yellow-500 transition-colors"
                }
              >
                Newsletter
              </NavLink>
            </li>
          </div>
          <li>
            <NewsletterSignup />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
