class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>姓名</div>
        <div>id</div>
      </div>
    )
  }

}
class Node1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <div>{this.props.name}</div>
      <div>{this.props.id}</div>
    </div>
    )
  }

}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        {
          name: 'li1',
          id: 1
        },
        {
          name: 'li2',
          id: 2
        },
        {
          name: 'li3',
          id: 3
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header></Header>
   
        {
          this.state.arr.map(item => {
            const {name, id} = item
            return (
              <Node1 name={name} id={id} key={id}></Node1>
            )
          })
        }
     
      </div>
    )
  }
}
ReactDOM.render(<List />, document.getElementById('root'))


