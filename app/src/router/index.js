import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import Son from "../pages/Detail/son"


const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
        path: '/son',
        component: Son
      }
    ]
  },

  // {
  //   type: 0,
  //   from: '/',
  //   to: '/home'
  // }
]

function createRoutes() {
  return (

    <HashRouter>
      <Switch>
        {/* <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Redirect from="/" to="/home"></Redirect> */}
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              render={(props) => (
                <route.component {...props} routes={route.children}/>
              )}
            />
          )

        })}
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </HashRouter>

  )
}




const router = new createRoutes()
export default router