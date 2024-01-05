import { useEffect, useState } from "react"

import store from "../../store"

const Home = () => {
  const [count, setCount] = useState(store.getState().countReducer.count)
  useEffect(() => {
    const unscribe = store.subscribe(() => {
      setCount(store.getState().countReducer.count)
    })
    return () => {
      unscribe()
    }
  }, [])
  const handlePlus = async () => {
    // setTimeout(() => {
      
    // })
    let a = await Promise.resolve(4)
  
    store.dispatch({type: 'PLUS', payload: a})
  }
  return (
    <div>
      <div>首页</div>
      <div>{count}</div>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}


export default Home