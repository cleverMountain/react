export default class Bus {
  constructor() {
    this.list = []
  }
  subscribe(handler) {
    this.list.push(handler)
  }
  publish(p) {
    this.list.forEach(handler => handler(p))
  }
}