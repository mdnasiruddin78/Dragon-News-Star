import {
    createBrowserRouter,
  } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout></Homelayout>,
      children: [
        {
          path: "/category/:id",
          element: <h2>this is category</h2>
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