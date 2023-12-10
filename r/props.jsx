// 组件嵌套
class Author extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.author}</div>
    )
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: 'xiaoli',
      title: '这是一个标题'
    }
  }
  render() {
    return (
      <div>
        <Author author={this.state.author}></Author>
        <Title title={this.state.title}></Title>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))