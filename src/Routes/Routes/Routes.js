import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appointment/Appoinment";
import Login from "../../Pages/Authantication/Login";
import SignUp from "../../Pages/Authantication/SignUp";
import Home from "../../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>
      }
    ],
  },
]);
