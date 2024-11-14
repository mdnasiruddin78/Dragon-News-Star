import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Registation from "../Pages/Registation";
import NewsDetails from "../Pages/NewsDetails";


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
      path: "/news/:id",
      element: <NewsDetails></NewsDetails>,
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>,
        },
        {
          path: "/auth/register",
          element: <Registation></Registation>,
        },
      ],
    },
    {
      path: "*",
      element: <div>Error</div>,
    }
  ]);


  export default router;