import { memo, useCallback, useEffect, useState } from "react"

const Child = memo((props) => {
  console.log('儿子触发')
  return (
    <div>儿子:{props.count2}</div>
  )
})

export default function Parent() {
  let [count1, setCount1] = useState(1)
  let [count2, setCount2] = useState(2)
  // const change1 = useCallback(() => {
  //   setCount1(count1 + 1)
  // }, [count1])
const change1 = () => {
  setCount1(count1 + 1)
}
  const change2 = () => {
    setCount2(count2 + 1)
  }
  return (
    <div>
      <div>parnet: {count1}</div>
      <button onClick={change1}>父亲</button>
      <Child count2={count2} />
      <button onClick={change2}>儿子</button>
    </div>
  )
}