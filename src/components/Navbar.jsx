import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg ${
      pathname === path
        ? "bg-white text-blue-600 font-semibold"
        : "text-white hover:bg-blue-500"
    }`;

  return (
    <div className="bg-blue-600 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-white">Job Tracker</h1>

        <div className="flex gap-3">
          <Link to="/dashboard" className={linkStyle("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/stats" className={linkStyle("/stats")}>
            Stats
          </Link>
        </div>
      </div>
    </div>

  );
}
