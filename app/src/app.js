// import TodoList from "./pages/todolist"
// import Control from "./pages/control"
// import SubAndPub from "./pages/comunication"
// import Father from "./pages/lifeCycle/index."
// import Use from "./pages/hooks/useState"
// import {HashRouter, Route} from "react-router-dom"
import { Provider } from 'react-redux';
import Counter from './pages/Counter';
import Router from "./router"
import store from "./pages/store"
import store1 from './pages/redux';
import { useEffect } from 'react';
console.log(Router)
export default function App() {
  console.log(store1.getState())
  useEffect(() => {
    store1.subscribe(() => {
      console.log('我在app中订阅了')
    })
  })
  return Router
  // return (
  //   <Provider store={store}>
  //     <div>
  //       <h1>React Redux Example</h1>
  //       <Counter />
  //     </div>
  //   </Provider>
  // );
}

