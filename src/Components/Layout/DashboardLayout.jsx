import { Link, Outlet, useLocation } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config.js";

export default function DashboardLayout() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu pt-10 p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          <div>
            <li className={`border ${isActive("/dashboard") ? "bg-green-500 font-bold" : "bg-sky-500"} text-white mb-3`}>
              <Link to={"/dashboard"}>Dashboard Home</Link>
            </li>
            <li className={`border ${isActive("/dashboard/manage-blogs") ? "bg-green-500 font-bold" : "bg-sky-500"} text-white mb-3`}>
              <Link to={"/dashboard/manage-blogs"}>Manage All Blogs</Link>
            </li>
            <li className={`border ${isActive("/dashboard/add-blog") ? "bg-green-500 font-bold" : "bg-sky-500"} text-white mb-3`}>
              <Link to={"/dashboard/add-blog"}>Add Blog</Link>
            </li>
          </div>
          <div className="flex gap-4">
            <Link to={"/"} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
