import { Component, createRef } from "react";
import "./index.css"

class Add extends Component {
  constructor(props) {
    super(props)
    this.listName = createRef()

  }
  add() {
    console.log(this.listName)
    const value = this.listName.current.value
    if (!value) {

      return alert('请先填入待办事项')
    }
    this.props.addList(value)
  }
  clearInput() {
    this.listName.current.value = '';
  }
  render() {
    return (
      <div className="add">
        <input className="in" ref={this.listName} placeholder="请输入代办事项" />
        <button className="btn" onClick={this.add.bind(this)}>添加</button>
      </div>
    )
  }
}
class Header extends Component {
  render() {
    return (
      <div className="header">
        <h5 className="index">序号</h5>
        <h5 className="title">事项</h5>
        <h5 className="operate">操作</h5>
      </div>
    )
  }
}

class Content extends Component {
  constructor(props) {
    super(props)
  }

  delTodolist(id) {
    const res = window.confirm('是否删除')
    res && this.props.delTodolist(id)
  }
  modifyTodolist(id) {
    const res = prompt('请填写修改的待办事项')
    res && this.props.modifyTodolist(id, res)
  }
  render() {
    return (
      this.props.todoList.map((item, index) => {
        return (
          <div className="item" key={item.id}>
            <div className="index">{index + 1}</div>
            <div className="title">{item.detail}</div>
            <div className="operate">
              <a className="del" onClick={this.delTodolist.bind(this, item.id)} >删除</a>
              <a className="modify" onClick={this.modifyTodolist.bind(this, item.id)} >修改</a>
            </div>
          </div>
        )
      })

    )
  }
}

class EmptyStatus extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>待办事项为空</div>
    )
  }
}

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: []
    }
    this.childHeader = createRef()
  }
  addList(listName) {
    const id = Math.random().toString(36).substring(2) + Date.now().toString(36)
    const item = [{
      id,
      detail: listName
    }]
    let todoList = this.state.todoList
    let isHas = todoList.filter(item => item.detail === listName).length
    if (isHas) {
      return alert('已经存在该待办事项，请勿重复添加')
    }
    todoList = todoList.concat(item)
    this.setState({
      todoList,
    }, () => {
      this.childHeader.current.clearInput()
    })
  }
  delTodolist(id) {
    const todoList = [...this.state.todoList]
    const index = todoList.findIndex(item => item.id === id)
    todoList.splice(index, 1)

    this.setState({ todoList })
  }
  modifyTodolist(id, detail) {
    const todoList = [...this.state.todoList]
    const index = todoList.findIndex(item => item.id === id)
    todoList[index]['detail'] = detail
    this.setState({ todoList })
  }
  render() {
    return (
      <div className="container">
        <Add
          addList={this.addList.bind(this)}
          ref={this.childHeader}
        />
        <Header />
        {
          this.state.todoList.length > 0 ?
            <Content
              todoList={this.state.todoList}
              delTodolist={this.delTodolist.bind(this)}
              modifyTodolist={this.modifyTodolist.bind(this)}
            /> :
            <EmptyStatus />
        }
      </div>

    )


  }
}