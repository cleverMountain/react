import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Login from "../pages/Login/index"
import HomePage from "../pages/Home";
import FirstPage from "../pages/FirstPage";
import StopCheck from "../pages/StopCheck";
import Clock from "../pages/Clock";

export interface RouteObj {
  path: string,
  element: React.ReactNode,
  children?: RouteObj[]
} 

const routes: RouteObj[] = [
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
] 
const route = createBrowserRouter(routes)

const router =  <RouterProvider router={route} />

export default router


