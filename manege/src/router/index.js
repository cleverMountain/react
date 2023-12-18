import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Login from "../pages/Login/index"
import HomePage from "../pages/Home";
import FirstPage from "../pages/FirstPage";
import StopCheck from "../pages/StopCheck";
import Clock from "../pages/Clock";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <HomePage />,
    children: [
      {
        path: '/home/firstpage',
        element: <FirstPage />
      },
      {
        path: '/home/stopcheck',
        element: <StopCheck />
      },
      {
        path: '/home/clock',
        element: <Clock />
      }
    ]
  }
])

const router =  <RouterProvider router={routes} />
console.log(router)
export default router


