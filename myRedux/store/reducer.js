import initalState from "./state"

export default function reducer(state = initalState, aciton= {}) {
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