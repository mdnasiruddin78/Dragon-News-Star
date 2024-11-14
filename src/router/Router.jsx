import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import CategoryNews from "../Pages/CategoryNews";


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
      element: <div>Login layout</div>,
    },
    {
      path: "*",
      element: <div>Error</div>,
    }
  ]);


  export default router;