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
        count: state -= 1
      }
    default :
      return state 
  }
}