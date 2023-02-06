import { NavLink, Form, useRouteLoaderData } from "react-router-dom";
import NewsletterSignup from "../Newsletter/NewsletterSignup";
import { Button } from "../UI/IgmtInk";

const Header = (props) => {
  // !To get the data from (loader) that is in (Root Route)
  const token = useRouteLoaderData("root");

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
          <div className="flex gap-4 items-center">
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
            {!token && (
              <li>
                <NavLink
                  to="auth?mode=login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500"
                      : "hover:text-yellow-500 transition-colors"
                  }
                >
                  Authentication
                </NavLink>
              </li>
            )}
            {token && (
              <li>
                {/* !To access (action) in different (pages) */}
                <Form action="/logout" method="post">
                  <Button className="px-0 py-0">Logout</Button>
                </Form>
              </li>
            )}
          </div>
          <li className="hidden sm:block">
            <NewsletterSignup />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
