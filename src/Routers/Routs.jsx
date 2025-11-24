import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import Suscribtions from "../Pages/Suscribtions";
import Blog from "../Pages/Blog";
 

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/suscribtion",
                element: <Suscribtions></Suscribtions> 
            }
        ]
    }
])
export default router