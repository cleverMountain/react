import { useState } from "react"
import Son from "./son"
export default function Parnet() {
  let [user, setUser] = useState(1)
  let [a, setA] = useState(2)
  return (
    <div>
      <div>父亲: {user}</div>
      <div>{a}</div>
      <button onClick={() => setUser(user+1)}>user+1</button>
      <button onClick={() => setA(a+1)}>a+1</button>
      <Son  user={user}/>
    </div>
  )
}