import { Component, createRef } from "react";

class Life extends Component {
  // 初始化渲染
  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
    this.myRef = createRef()
    this.init()
  }
  init() {
    console.log(this.myRef)
    console.log('子组件初始化了')
  }
  static getDerivedStateFromProps(nextProps, nextState) {

    // 根据 nextProps 和 prevState 计算并返回新的 state
    // 返回的对象将会被合并到组件的状态中
  
    return {
      derivedState: nextProps.someProp * 2,
    };

  }
  // render后更新之前
  getSnapshotBeforeUpdate(prevProps, prevState) {
  
    // 获取滚动位置等信息
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
  
    // 在这里进行条件检查，判断是否需要更新组件
    // 比较当前的属性和状态与即将接收到的新属性和新状态

    // 示例：如果新的属性中的值与旧的属性值相同，则不更新
    if (nextProps.name === nextState.a) {
      return false; // 不需要更新 阻止render
    }

    // 否则，返回 true 表示需要更新组件
    return true;
  }
  // 即将挂载
  componentWillMount() {
    console.log(this.myRef)
    console.log('子组件组件挂载前')
  }
  // 已经挂载
  componentDidMount() {
    console.log(this)
    console.log(this.myRef)
    console.log('子组件已经挂载了')
  }
  // 即将接收porop
  componentWillReceiveProps() {
   console.log('子组件即将接收prop')
  }
  componentWillUpdate() {
    console.log('子组件即将更新')
  }
  // 组件更新
  componentDidUpdate() {
    console.log('子组件更新了')
  }
  // 组件即将卸载
  componentWillUnmount() {
    console.log('子组件即将卸载')
  }
  handleClick() {
    console.log('子组件状态改变了')
    this.setState({ a: 222 })
  }

  change(e) {
    this.props.change(e.target.value)
  }
  render() {

    return (
      <div>
        <input ref={this.myRef} value={this.props.name} onChange={this.change.bind(this)} />
      </div>
    )
  }
}


export default class Father extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      isShow: true
    }
    this.init()
  }
  init() {
    console.log('父组件初始化了')
  }
  componentWillMount() {
    console.log('父组件组件挂载前')
  }
  componentDidMount() {
    console.log('父组件已经挂载了')
  }
  componentDidUpdate() {
    console.log('父组件更新了')
  }
  componentWillUnmount() {
    console.log('父组件即将卸载')
  }
  change(name) {
    this.setState({ name })
  }
  render() {
    return (
      <div>
        {
          this.state.isShow ? <Life name={this.state.name} change={this.change.bind(this)} /> : ''
        }
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>点击</button>
      </div>
    )
  }
}