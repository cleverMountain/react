import { useRef } from "react"

// ref不会触发重新渲染
// function Ref12() {
//   let refValue = useRef(1)
//   console.log(refValue.current)
//   const handle = () => {
//     console.log(refValue.current)
//   }
//   const handleChange = (e) => {
//     refValue.current = e.target.value
//   }
//   return (
//     <div>
//       <input value={refValue.current} onChange={handleChange}/>
//       <button onClick={handle}>eeqw</button>
//     </div>
//   )
// }

export default function Ref1() {
  let refValue = useRef(null)
  console.log(refValue.current)
  const handle = () => {
    console.log(refValue)
  }
  const handleChange = (e) => {
    refValue.current.value = e.target.value
  }
  return (
    <div>
      <input ref={refValue} onChange={handleChange}/>
      <button onClick={handle}>eeqw</button>
    </div>
  )
}