import { Component } from "react";
import Filed from "../../components/filed";

export default class Control extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      upwd: ''
    }
  }
  handleUnameChange(uname) {

    this.setState({uname})
  }
  handleUpwdChange(upwd) {

    this.setState({upwd})
  }
  render() {
    return (
      <div>
        <Filed 
          label={'姓名:'}
          type='text'
          value={this.state.uname}
          handleChange={this.handleUnameChange.bind(this)}
        />
        <Filed
          label={'密码:'}
          type='password'
          value={this.state.upwd}
          handleChange={this.handleUpwdChange.bind(this)}
        />
        <div>
          <button>登录</button>
          <button onClick={() => {this.setState({upwd: '', uname: ''})}}>重置</button>
        </div>
      </div>
    )
  }
}