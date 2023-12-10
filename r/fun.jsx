// 函数组件一定是纯函数
function Author (props) {
  return (
    <div>{props.author}</div>
  )
}

function Title (props) {
  return (
    <div>{props.title}</div>
  )
}

function App1(props) {
 let state = {
    title: 'this is a title',
    author: 'xiaoli'
  }
  return (
    <div>
      <Author author={state.author}></Author>
      <Title title={state.title}></Title>
    </div>
  )
}

ReactDOM.render(<App1/>, document.getElementById('root'))
