import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../Layouts/DashBoard/DashBoard";
import Main from "../../Layouts/Main/Main";
import Classes from "../../pages/Classes/Classes";
import MangeClasses from "../../pages/Dashboard/Admin/ManageClasses/MangeClasses";
import ManageUsers from "../../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddAClass from "../../pages/Dashboard/Instructor/AddAClass/AddAClass";
import MyClassEdit from "../../pages/Dashboard/Instructor/MyClasses/MyClassEdit";
import MyClasses from "../../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MyEnrolledClasses from "../../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClasses from "../../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../../pages/Dashboard/Student/Payment/Payment";
import PaymentHistory from "../../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import Home from "../../pages/Home/Home/Home";
import Instructors from "../../pages/Instructors/Instructors";
import Login from "../../pages/Login/Login";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Register from "../../pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import InstructorRoute from "../InstructorRoute/InstructorRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          await fetch("http://localhost:5000/classes/top-six"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
        loader: async () => await fetch("http://localhost:5000/classes"),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader: async () => await fetch("http://localhost:5000/classes"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "mySelectedClasses/payment/:id",
        element: <Payment />,
      },
      {
        path: "addAClass",
        element: (
          <InstructorRoute>
            <AddAClass></AddAClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses/:id",
        element: (
          <InstructorRoute>
            <MyClassEdit />
          </InstructorRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <MangeClasses></MangeClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
