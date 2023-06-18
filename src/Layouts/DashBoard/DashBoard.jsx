import {
  AiFillControl,
  AiFillGold,
  AiOutlineFileAdd,
  AiOutlineHome,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { ImBook, ImBooks } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import DarkThemeToggle from "../../pages/shared/Navbar/DarkThemeToggle";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();



  return (
    <div className="drawer lg:drawer-open bg-base-300" >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn-custom drawer-button lg:hidden"
        >
          Menu
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-white bg-slate-700">
          {/* Sidebar content here */}
          {isInstructor ? (
            <>
            <li>
              <p className="text-xl font-semibold">Instructor&apos;s Dashboard</p>
            </li>
              <li>
                <NavLink to="addAClass">
                  <AiOutlineFileAdd />
                  Add a class
                </NavLink>
              </li>
              <li>
                <NavLink to="myClasses">
                  <AiFillGold />
                  My Classes
                </NavLink>
              </li>
            </>
          ) : isAdmin ? (
            <>
            <li>
              <p className="text-xl font-semibold">Admin&apos;s Dashboard</p>
            </li>
              <li>
                <NavLink to="manageClasses">
                  <AiFillControl />
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="manageUsers">
                  <AiOutlineUserSwitch />
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
            <li>
              <p className="text-xl font-semibold">Student&apos;s Dashboard</p>
            </li>
              <li>
                <NavLink to="mySelectedClasses">
                  <ImBooks /> My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="myEnrolledClasses">
                  <ImBook />
                  Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="paymentHistory">
                  <MdPayment />
                  Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider mt-20">navigate</div>
          <li>
            <NavLink to="/">
              {" "}
              <AiOutlineHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaClipboardList />
              Classes
            </NavLink>
          </li>
            <div className="divider mt-20">utility</div>
          <li>
            <DarkThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
