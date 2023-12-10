import React from "react"
import ReactDOM from "react-dom"
function Blog() {
  return <li>Test</li>
}
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      obj: 1
    }
  }
  render() {
    const op = React.createElement(
      'p',
      {
        className: 'aa',
        key: 1
      },
      this.state.obj
    )
    const oBtn = React.createElement(
      'button',
      {
        className: 'bb',
        key: 2,
        onClick: () => this.setState({
          obj: 2
        })
      },
      '打开'
    )
    const oWrap = React.createElement(
      'div',
      {
        className: 'xx'
      },
      [op, oBtn]
    )
    return oWrap
  }


}
ReactDOM.render(
  React.createElement(Button), document.getElementById('root'))

