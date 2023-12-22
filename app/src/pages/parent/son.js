import { useCallback, useEffect } from "react"

export default function Son ({user}) {
 
  const print = useCallback((user) => {
    console.log(user)
  }, [user])
  useEffect(() => {
    console.log(print)
  })
  return (
    <div>儿子:</div>
  )
}