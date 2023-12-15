import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
export default function Tabbar() {
  return (
    <div>
       <NavLink to="/home">首页</NavLink>
      <NavLink style={{'margin': '0 12px'}} to="/detail">详情</NavLink>
      <NavLink to="/my">我的</NavLink>
    </div>
  )
}