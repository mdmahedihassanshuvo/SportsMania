import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Instructors from "../Pages/Istructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/classes',
            element: <Classes/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/instructors',
            element: <Instructors/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
      ]
    },
  ]);

  export default router;