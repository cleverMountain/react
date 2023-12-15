
import { useEffect } from "react";
import Tabbar from "../../components/Tabbar";
import store1 from "../redux";
export default function My () {
 
  useEffect(() => {
    store1.dispatch({
      type: 'add',
      payload: 1
    })
  })
  return (
    <div>
      <div>我的</div>
      <Tabbar />
    </div>
  )
}