import {
    createBrowserRouter
  
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
            path: '/register',
            element: <Register></Register>
          },

          {
            path: '/login',
            element: <Login></Login>,
          },
      ]
    },
  ]);

  export default router;