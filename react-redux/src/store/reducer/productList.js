

const productListReducer = (state = [], action = {}) => {

  const {type, payload} = action

  switch(type) {
    case 'LIST':
      return payload
      default: 
        return state
  }
}

export default productListReducer