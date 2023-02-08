const { default: Link } = require("next/link");

const Header = (props) => {
  return (
    <header className="shadow-xl z-50 p-4">
      <nav className="max-w-sm mx-auto">
        <ul className="flex justify-between">
          <li>
            <Link href="/" className="text-lg font-bold">
              Meetups
            </Link>
          </li>
          <li>
            <Link href="/new-meetup" className="text-lg font-bold">
              New
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
