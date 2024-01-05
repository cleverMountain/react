import initalState from "./state"
import { combineReducers } from "./redux"

function reducerCount(state = initalState, aciton= {}) {
  const  {type, payload} = aciton
  
  switch(type) {
    case 'add': 
      return {
        ...state,
        count: state.count + payload
      }
    case 'minus': 

      return {
        ...state,
        count:  state.count - payload
      }
    default :
      return state 
  }
}

function reducerState(state = {a: 1}, aciton = {}) {
  const  {type, payload} = aciton
    
  switch(type) {
    case 'add1': 
      return {
        ...state,
        a: state.a + payload
      }
    case 'minus1': 

      return {
        ...state,
        a:  state.a - payload
      }
    default :
      return state 
  }
}


export default combineReducers({
  reducerCount,
  reducerState
})