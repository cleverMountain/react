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