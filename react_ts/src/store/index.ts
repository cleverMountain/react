import { createStore, combineReducers } from "../redux";

export interface ActionType {
  type?: string,
  payload?: number
}
interface StateType {
  count: number
}

const countReducer = (state = { count: 1 }, action: ActionType = {}):StateType => {
  const { type, payload } = action

  switch (type) {
    case 'add':
      return {
        ...state,
        count: state.count + (payload as number)
      }
    case 'minus':

      return {
        ...state,
        count: state.count - (payload as number)
      }
    default:
      return state
  }
}

const objReducer = (state = { count: 1 }, action: ActionType = {}):StateType => {
  const { type, payload } = action

  switch (type) {
    case 'add':
      return {
        ...state,
        count: state.count + (payload as number)
      }
    case 'minus':

      return {
        ...state,
        count: state.count - (payload as number)
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  countReducer,
  objReducer
})
console.log(reducers)
export default createStore(reducers)