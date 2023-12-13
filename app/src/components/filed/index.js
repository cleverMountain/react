import { Component } from "react";
import "./index.css"

export default class Filed extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    type: 'password'
  }
  emitValue(e) {
    this.props.handleChange(e.target.value)
  }
  render () {
    return (
      <div className="item">
        <div>{this.props.label}</div>
        <input 
          type={this.props.type}
          className="input"
          value={this.props.value}
          onChange={this.emitValue.bind(this)}
        />
      </div>
    )
  }
}
