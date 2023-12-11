


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
    this.props.login(this.state.userName, this.state.passWord)
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
        <button className="btn" onClick={this.login.bind(this)}>登录</button>
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
  logout() {
    this.props.logout()
  }
  render() {
    return (
      <div>
        <h1>欢迎来到首页</h1>
        <button className="btn" onClick={this.logout.bind(this)}>退出</button>
      </div>
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
  login(userName, passWord) {
    this.setState({ isLogin: false })
  }
  logout() {
    this.setState({ isLogin: true })
  }
  render() {
    return (
      this.state.isLogin ? <Login login={this.login.bind(this)} /> : <MainPage logout={this.logout.bind(this)} />
    )
  }
}

ReactDOM.render(<App2 />, document.getElementById('root'))