import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.config";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link>Categories</Link>
                            <ul className="p-2">
                                <li><Link to="/">HTML</Link></li>
                                <li><Link to="/">CSS</Link></li>
                                <li><Link to="/">Javascript</Link></li>
                                <li><Link to="/">React</Link></li>
                                <li><Link to="/">Machine Learning</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">TechTales</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li><Link to="/">HTML</Link></li>
                                <li><Link to="/">CSS</Link></li>
                                <li><Link to="/">Javascript</Link></li>
                                <li><Link to="/">React</Link></li>
                                <li><Link to="/">Machine Learning</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>

            {/* user logged in kina */}
            {!user?.email ? (
                <div className="navbar-end flex gap-4">
                    <Link to={"/login"} className="btn">
                        Login
                    </Link>
                    <Link to={"/register"} className="btn">
                        Registration
                    </Link>
                </div>
            ) : (
                <div className="navbar-end flex gap-4">
                    <div>
                        <button className="btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                    <div>
                        <Link to={"/dashboard"} className="btn">
                            Dashboard
                        </Link>
                    </div>
                    <div className="avatar">
                        {/* <p>{user.displayName}</p> */}
                        <div className="w-12 rounded-full border-2 border-black">
                            <img src={user?.photoURL || "/public/placeholder.jpg"} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}
export default Navbar;
