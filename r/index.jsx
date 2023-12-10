console.log(1)

/**
 * JSX?
 * 1.是一种标签语法,JS进行语法扩展
 * 2.不是字符串，不是HTML标签
 * 3.描述UI呈现与交互的直观形式
 * 4.生成react元素
 */

// jsx经过编译会成为reactDom
const el = <h1 className="title">你好</h1>
console.log(el)

// const el = React.createElement(
//   'h1',
//   {
//     className: 'title'
//   },
//   '你好'
// )
// ReactDOM.render(el, document.getElementById('root'))

// 
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      inner: '打开'
    }
  }
  statusChange() {
    this.setState({
      isOpen: !this.state.isOpen,
      inner: this.state.isOpen ? '打开' : '关闭'
    })
    console.log(this.state)

  }
  render() {
    return (
      <div className="xx">
        <div className="aa">{this.state.inner}</div>
        <button onClick={this.statusChange.bind(this)}>{this.state.isOpen ? '打开' : '关闭'}</button>
      </div>
    )
  }
}

// for
class Wlak extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        {
          name: '张三',
          id: 1
        },
        {
          name: '李四',
          id: 2
        },
        {
          name: '王五',
          id: 3
        }
      ]
    }
  }
  createElemt() {
    return (
      <ul className="title">
        {
          this.state.students.map(item => {
            return (
              <li key={item.id}>
                <span>{item.id}</span>
                <p>{item.name}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render() {
    return (this.createElemt())
  }
}

function update() {
  const el = (
    <div>
      <h2>text</h2>
      <p>{new Date().toString()}</p>
    </div>
  )
  ReactDOM.render(
    el, document.getElementById('root'))
}
setInterval(() => update(), 1000)
ReactDOM.render(
  React.createElement(Button), document.getElementById('root'))

