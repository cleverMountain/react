interface ActionType {
  type?: string,
  payload?: number
}
interface StateType {
  count: number
}
interface ReduxType {
  _state?: any
}
interface CreateStoreType {
  subscribe: Function
  dispatch: Function
  getState: Function
  publish: Function
}
const cbList: Array<Function> = []
const redux: ReduxType = {}
const createStore = (reducer: Function): CreateStoreType => {
  let _state = reducer()
  defineReactive(_state)

  let dispatch = createDispatch(reducer),
    getState = createGetState(reducer)
  return {
    subscribe,
    dispatch,
    getState,
    publish,
  }
}
const combineReducers = (reducers: object): Function => {
  return (state: StateType, action: ActionType) => {
    // 生成新的 state 对象
    const nextState: object = {};
    // 遍历每个 reducer，并根据其 key 分别调用
    for (const key in reducers) {
      // 获取当前 reducer 处理的 state 分片
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      // 调用 reducer 处理相应的 state 分片
      const nextStateForKey = reducer(previousStateForKey, action);
      // 将处理后的 state 分片添加到新的 state 对象中
      nextState[key] = nextStateForKey;
    }

    return nextState;
  };
}
const defineReactive = (state: any) => {
  Object.defineProperty(redux, '_state', {
    get() {
      return state
    },
    set(newVal) {
      state = newVal
      publish()
    }
  })
}
const subscribe = (fn: Function): void => {
  if (cbList.includes(fn)) return
  cbList.push(fn)
}
const createGetState = (reducer: Function) => {
  return () => {
    return reducer(redux._state)
  }
}
const createDispatch = (reducer: Function) => {
  return (action: ActionType) => {
    redux['_state'] = reducer(redux['_state'], action)
  }
}
const publish = (): void => {
  cbList.forEach(cb => cb())
}
export { createStore, combineReducers }