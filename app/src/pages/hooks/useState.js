import { useState } from "react"

export default function Use () {
  const [age, setAge] = useState(1)
  setTimeout(() => {
    setAge(312)
    console.log(age)
  })
  return (
    <div>{age}</div>
  )
}