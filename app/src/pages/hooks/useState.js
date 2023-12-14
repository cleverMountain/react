import { createRef, useEffect, useState } from "react"

export default function Use () {
  const [age, setAge] = useState(1)
  const myRef = createRef()
  const handleInput = (e) => {
    setAge(e.target.value)
  }
  const handleClick = () => {
    console.log(age)
  }
  // 全量
  useEffect(() => {
    console.log('age改变了')
    console.log(myRef.current)
      
  })
  // 某一个
  // useEffect(() => {
  //   console.log('age改变了')
  //   console.log(myRef.current)
      
  // }, [age])
  return (
    <div>
      <input ref={myRef} id="in" value={age} onChange={handleInput}/>
      <button onClick={handleClick}>打印</button>
    </div>
  )
}

// useState事项
const status = []
const statusSetter = []
let statusIndex = 0
function createStatus(initStatus) {
  return initStatus
}
function createStatusSetter(stateIndex) {
  return (newState) => {

    if (typeof newState === 'function') {
      status[stateIndex] = newState(status[stateIndex])
    } else {
      status[stateIndex] = newState
    }
  }
}
function myUseState(initStatus) {
  status[statusIndex] = createStatus(initStatus)
  statusSetter[statusIndex] = createStatusSetter(statusIndex)
  let res = [status[statusIndex], statusSetter[statusIndex]]
  statusIndex++
  return res
}
let [count, setCount] = myUseState(1)
console.log(count, setCount)
setCount(33)
console.log(count)
// setCount(2)
console.log(status)
// console.log(count)
