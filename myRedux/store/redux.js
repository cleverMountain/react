

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

export function combineReducers(reducers) {
  return (state = {}, action) => {
    // 生成新的 state 对象
    const nextState = {};
    
    // 遍历每个 reducer，并根据其 key 分别调用
    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        // 获取当前 reducer 处理的 state 分片
        const reducer = reducers[key];
        const previousStateForKey = state[key];
        
        // 调用 reducer 处理相应的 state 分片
        const nextStateForKey = reducer(previousStateForKey, action);
        
        // 将处理后的 state 分片添加到新的 state 对象中
        nextState[key] = nextStateForKey;
      }
    }
    return nextState;
  };
}

function createReduxState(reducer) {

  let _state = reducer()
  console.log(_state)
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