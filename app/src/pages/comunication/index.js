import { Component } from "react";
import Bus from "../../utils";

const bus = new Bus()
class Item extends Component {
  constructor() {
    super()
    this.state = {
      list: ['小李', '小张']
    }
  }
  // 发布(动作那一方)
  publish(item) {
    bus.publish(item)
  }
  render() {
    return (
      this.state.list.map(item => {
        return (
          <div onClick={this.publish.bind(this, item)} key={item}>{item}</div>
        )
      })
    )
  }
}

class Show extends Component {
  constructor() {
    super()
    this.state = {
      cur: ''
    }
    this.init()
  }
  init() {
    // 订阅者
    bus.subscribe((item) => {
      this.setState({cur: item})
    })
  }
  render() {
    return (
    
      <div>你点击的是:{this.state.cur}</div>
    )
  }
}

export default class SubAndPub extends Component {
  render () {
    return (
      <div>
        <Item />
        <Show />
      </div>
    )
  }
}