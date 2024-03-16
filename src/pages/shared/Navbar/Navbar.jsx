import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useBusket from "../../../hooks/useBusket";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import DarkThemeToggle from "./DarkThemeToggle";

// #c33827 navbar color-bg
// ##2B3440

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { busket } = useBusket();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  console.log(isAdmin);

  const navOptions = (
    <>
      <li className="nav-btn">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-btn">
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li className="nav-btn">
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#2B3440] fixed z-10 lg:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className="avatar hidden lg:block">
          <div className="w-12 rounded-full">
            <img src="assets/image/logo/logo.jpg" alt="" />
          </div>
        </div>
        <a className="normal-case lg:text-xl text-[#c33827] font-bold ml-3 russo-one-regular leading-none hover:text-base-300">
          Bushido <br /> Bootcamp
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{navOptions}</ul>
      </div>
      <div className="navbar-end ">
        {user?.email ? (
          <>
            <div className="dropdown dropdown-end mr-2">
              <label
                tabIndex={0}
                data-tip={user?.displayName}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
              >
                <div className="w-12 rounded-sm">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
            <div>
              {isAdmin ? (
                <Link
                  to="dashboard/manageClasses"
                  className="btn lg:btn-custom normal-case btn-sm"
                >
                  Admin <br /> Dashboard
                </Link>
              ) : isInstructor ? (
                <Link
                  to="dashboard/myClasses"
                  className="btn lg:btn-custom normal-case btn-sm"
                >
                  Instructor <br /> Dashboard
                </Link>
              ) : (
                <Link
                  to="dashboard/mySelectedClasses"
                  className="btn lg:btn-custom normal-case btn-sm"
                >
                  Student <br /> Dashboard
                  <div className="badge">+{busket?.length}</div>
                </Link>
              )}
            </div>
          </>
        ) : (
          <Link to="/login" className="">
            <button className="text-xl font-semibold py-2 px-4 rounded-lg normal-case bg-[#c33827] hover:shadow-inner  hover:text-base-300 russo-one-regular">
              Login
            </button>
          </Link>
        )}
        <DarkThemeToggle></DarkThemeToggle>
      </div>
    </div>
  );
};

export default Navbar;
