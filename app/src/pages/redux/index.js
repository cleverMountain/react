import { createStore } from "redux"
const initalStatus = {
  a: 1
}

const reducer = (preState = initalStatus, action) => {
  const { type, payload } = action
  switch (type) {
    case 'add':
      const origin = preState.a
      preState.a = origin + payload
      return preState
  }
  return preState
}

const store1 = createStore(reducer)


export default store1