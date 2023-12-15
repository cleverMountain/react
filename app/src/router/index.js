import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import My from "../pages/My"


// const routes = [
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/detail',
//     component: Detail,
//     children: [
//       {
//         path: '/son',
//         component: Son
//       }
//     ]
//   },

//   // {
//   //   type: 0,
//   //   from: '/',
//   //   to: '/home'
//   // }
// ]

function createRoutes() {
  return (

    <HashRouter>
      <Switch>
        {/*   
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
        <Redirect from="/" to="/home"></Redirect> */}
        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/my" component={My}></Route>
        <Redirect from="/" to="/home"></Redirect>
       
      </Switch>
    </HashRouter>

  )
}




const router = new createRoutes()
export default router