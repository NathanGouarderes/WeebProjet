import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageAnime from "../pages/PageAnime";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/about",
              element: <About />
            },
            {
              path: "/anime/:idAnime",
              element: <PageAnime />
            }
          ]
    }
]);

export default router