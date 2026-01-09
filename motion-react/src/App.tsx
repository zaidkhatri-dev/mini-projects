import { Link } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <nav>
        <ul className="flex items-center justify-center gap-20 text-2xl bg-gray-100 relative text-neutral-900 rounded-full">
          <li className="px-5 py-3">
            <Link to="/move-me">
              <span>Move Me</span>
            </Link>
          </li>
          <li className="px-5 py-3">
            <Link to="/football-cards">
              <span>Football Cards</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
