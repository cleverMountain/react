import { Component, createRef } from "react"


export default class RefList extends Component {
  constructor() {
    super()
    this.myRef = createRef()
    this.defaultValue = '312' // 默认值
    this.init()
  }
  init() {
    // console.log(this.myRef)
    // this.myRef.current = 22
  }
  handleClick() {
    console.log(this.myRef.current.value)
  }
  render() {
   return (
    <div>
      <input defaultValue={this.defaultValue} ref={this.myRef}></input>
      <button onClick={this.handleClick.bind(this)}>按钮</button>
    </div>
   )
  }
} 