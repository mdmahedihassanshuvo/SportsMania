import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Instructors from "../Pages/Istructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";;
import SelectedClasses from "../Pages/Dashboard/Components/Student/SelectedClasses";
import EnrollClasses from "../Pages/Dashboard/Components/Student/EnrollClasses";
import AllUsers from "../Pages/Dashboard/Components/Admin/ManageUsers";
import ManageClasses from "../Pages/Dashboard/Components/Admin/ManageClasses";
import AddClass from "../Pages/Dashboard/Components/Instructor/AddClass";
import MyClass from "../Pages/Dashboard/Components/Instructor/MyClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import FeedBack from "../Reused/FeedBack";
import PaymentHistory from "../Pages/Dashboard/Components/Student/PaymentHistory";
import Payment from "../Pages/Dashboard/Components/Student/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/classes',
        element: <Classes />
      },
      {
        path: '/instructors',
        element: <Instructors />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'manageclasses',
        element: <AdminRoute><ManageClasses /></AdminRoute>
      },
      {
        path: 'selectedclass',
        element: <SelectedClasses />
      },
      {
        path: 'enrollclass',
        element: <EnrollClasses />
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },
      {
        path: 'addclass',
        element: <AddClass />
      },
      {
        path: 'myclass',
        element: <MyClass />
      },
      {
        path: 'feedBack/:id',
        element: <FeedBack />
      },
      {
        path: 'payment/:id',
        element: <Payment />
      }
    ]
  },
]);

export default router;