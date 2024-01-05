

const cbList = []
const redux = {}
export function createStore(reducer) {
  let getState = _getState(reducer)
  let dispatch = _dispatch(reducer)
  createReduxState(reducer)
  return {
    subscribe,
    dispatch,
    getState,
    publish,
  }
}

function createReduxState(reducer) {

  let _state = reducer()
  Object.defineProperty(redux, '_state', {
    get() {
      console.log(_state)
      return _state
    },
    set(newVal) {
      _state = newVal
      publish()
    }
  })
}

function subscribe(cb) {
  if (cbList.includes(cb)) return
  cbList.push(cb)
}
function  _dispatch(reducer) {
  return function (action) {
    redux._state = reducer(redux._state, action)
 
  }
}
function publish() {
  cbList.forEach(cb => cb())
}

function _getState(reducer) {
  return function () {
    return reducer(redux._state)
  }
}