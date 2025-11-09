import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Plants from "../Pages/Plants/Plants";
import Profile from "../Pages/Profile/Profile";
import Login from "../AuthenticationPages/Login/Login";
import Register from "../AuthenticationPages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "plants",
        element: <Plants></Plants>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
