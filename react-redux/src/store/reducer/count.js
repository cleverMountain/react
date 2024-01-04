import intialState from "../state/count"

const countReducer = (state = intialState, action = {}) => {

  const {type, payload} = action
  console.log(state)
  switch(type) {
    case 'PLUS':
      console.log(state)
      return {
        ...state,
        count: state.count + payload
      }
      case 'MINUS':
        return {
          ...state,
          count:state.count - payload
        }
      default: 
        return state
  }
}

export default countReducer