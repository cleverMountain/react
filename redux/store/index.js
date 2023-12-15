const list = []
let store = null
let getReducer = null
function Redux() {
  const dispatch = (action) => {
  
    list.forEach(handler => handler())
    getReducer(store, action)
  }
  const subscribe = (cb) => {
    list.push(cb)
  }
  const getState = () => {
    return store
  }
  const createStore = (reducer) => {
    getReducer = reducer
    store = reducer()
    // return res
    return {dispatch, subscribe, getState}
  }
  return { createStore }
}


const redux = Redux()
export default redux