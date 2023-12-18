import React from "react"
import FormLogin from "./FormLogin"
import "./index.less"
const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="detail">
        <FormLogin />
      </div>
    </div>
  )
}

export default Login