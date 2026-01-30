import { UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { LayoutDashboard, BarChart3 } from "lucide-react";
import { Brain } from "lucide-react";


export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-bgsoft">

      {/* Sidebar */}
      <div className="w-60 bg-primary text-white p-6 space-y-8 shadow-xl">
        <h1 className="text-2xl font-bold">JobTracker</h1>

        <nav className="flex flex-col gap-4">

         <Link
            to="/profile"
            className="flex items-center gap-3 hover:bg-white/20 p-2 rounded-lg"
>
            <UserCircle size={18} />
            Profile
         </Link>

         <Link
           to="/skills"
           className="flex items-center gap-3 hover:bg-white/20 p-2 rounded-lg"
>
           <Brain size={18} />
           Skills
         </Link>


          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:bg-white/20 p-2 rounded-lg"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/stats"
            className="flex items-center gap-3 hover:bg-white/20 p-2 rounded-lg"
          >
            <BarChart3 size={18} />
            Stats
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
