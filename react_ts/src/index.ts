import store from "./store"

const addBtn: HTMLElement = document.getElementById('add') as HTMLElement, // 断言
  minusBtn: HTMLElement = document.getElementById('minus')as HTMLElement,
  countEle: HTMLElement = document.getElementById('count')as HTMLElement

const init = (): void => {
  render()
  bindEvent()
}
store.subscribe(() => {
  render()
})
function render(): void {

  countEle.innerHTML = store.getState().countReducer.count
}
function bindEvent() {
  addBtn.addEventListener('click', () => {
    store.dispatch({type: 'add', payload: 1})
  })
  minusBtn.addEventListener('click', () => {
    store.dispatch({type: 'minus', payload: 1})
  })
}
init()