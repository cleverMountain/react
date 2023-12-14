import { useReducer } from "react"

// useReducer用一同一管理某一个属性值

export default function Add() {
  const countReducer = (state, action) => {

    const { type, value } = action
    switch (type) {
      case '+':
        return state += value
      case '-':
        return state -= value
      case '*':
        return state *= value
      case '/':
        return state / value
      default:
        return state
    }
  }
  /**
   * dispatch
   * 1.派发函数，一般传入type与value 类型与值
   * 2.countReducer reduce函数参数为原状态与dispatch派发的参数
   */
  const [count, dispatch] = useReducer(countReducer, 4)
  return (

    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: '+', value: 2 })}>+</button>
      <button onClick={() => dispatch({ type: '-', value: 2 })}>-</button>
      <button onClick={() => dispatch({ type: '*', value: 2 })}>*</button>
      <button onClick={() => dispatch({ type: '/', value: 2 })}>/</button>
    </div>
  )
}

// function reducer() {

// }

// const useReducer1 = (reducer, initState) => {

//  const dispatch = (obj) => {
//   reducer(obj)
//  }
//   return [initState, dispatch]
// }

// let [count, dispatch] = useReducer1(reducer, 1)
// console.log(count)

// dispatch({a: 1, b: 2})