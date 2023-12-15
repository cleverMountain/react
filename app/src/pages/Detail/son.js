export default function Son(props) {
  const handle = () => {
    console.log(props)
    props.history.push('/my')
  }
  return (
    <div onClick={handle}>我是Detail的儿子</div>
  )
}