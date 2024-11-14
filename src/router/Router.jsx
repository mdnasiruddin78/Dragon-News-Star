import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout></Homelayout>,
      children: [
        {
          path: "",
          element: <Navigate to={"/category/01"}></Navigate>
        },
        {
          path: "/category/:id",
          element: <CategoryNews></CategoryNews>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ],
    },
    {
      path: "/news",
      element: <div>News layout</div>,
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <h2>login</h2>,
        },
        {
          path: "/auth/register",
          element: <h2>Register</h2>,
        },
      ],
    },
    {
      path: "*",
      element: <div>Error</div>,
    }
  ]);


  export default router;