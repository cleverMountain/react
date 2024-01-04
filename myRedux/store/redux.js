

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
      return _state
    },
    set(newVal) {
      _state = newVal
    }
  })
}

function subscribe(cb) {
  if (cbList.includes(cb)) return
  cbList.push(cb)
}
function  _dispatch(reducer) {
  return function (payload, type) {
    redux._state = reducer(payload, type)
 
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