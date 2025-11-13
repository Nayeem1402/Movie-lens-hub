import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import TvShow from "../Pages/TvShow";
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
                path: "/tv-show",
                element: <TvShow></TvShow>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    }
])
export default router