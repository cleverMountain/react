import Home from "@/views/Home/index.jsx"
import { lazy, Suspense } from "react"
import ViewLoading from "@/components/ViewLoading/index.jsx"
import { createHashRouter, RouterProvider } from "react-router-dom"

const List = lazy(() => import("../views/List/index.jsx"))
const Detail = lazy(() => import("../views/Detail/index.jsx"))

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/list',
    element: (
      <Suspense fallback={<ViewLoading />}>
        <List />
      </Suspense>
    )
  },
  {
    path: '/detail',
    element: (
      <Suspense fallback={<ViewLoading />}>
        <Detail />
      </Suspense>
    )
  },
]

const router = createHashRouter(routes)

const createRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default createRouterProvider