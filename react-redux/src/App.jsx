import React from "react"

import createRouterProvider from "./router"
const router =  createRouterProvider()
const App = () => {
  return router
}

export default App