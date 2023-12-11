


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      passWord: '',
    }
  }
  handleUser(e) {
    this.setState({ userName: e.target.value })
  }
  handlePwd(e) {
    this.setState({ passWord: e.target.value })
  }
  login() {
    console.log(this)
    if (!this.state.userName || !this.state.passWord) {
      return alert('请输入账号或密码')
    }

  }
  render() {
    return (
      <div className="login-c">
        <div className="account">
          <div>账户:</div>
          <input onChange={this.handleUser.bind(this)} className="acc-in"></input>
        </div>
        <div className="pwd">
          <div>密码:</div>
          <input onChange={this.handlePwd.bind(this)} className="pwd-in"></input>
        </div>
        <button className="btn" onClick={this.login.bind(this)}>{this.props.status}</button>
      </div>
    )
  }
}

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: true
    }
  }
  render() {
    return (
      <h1>欢迎来到首页</h1>
    )
  }
}

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }
  render() {
    if (this.state.isLogin) {
      return (
        <div>
          <Login status={'登录'}/>
        </div>
      )
    } else {
      return (
        <div>
          <MainPage />
        </div>
      )
    }

  }
}

ReactDOM.render(<App2 />, document.getElementById('root'))