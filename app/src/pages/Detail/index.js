import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Son from "./son"
import Tabbar from "../../components/Tabbar"
import store1 from "../redux"
import store from "../store"
export default function Detail () {

  return (
    <div>
      <li>电影院: {store1.getState().CountReducer.a}</li>
      <Route path="/detail/son" component={Son}></Route>
      <Redirect from="/detail" to="/detail/son"></Redirect>
      <Tabbar />
    </div>
  )
}