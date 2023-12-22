
const initialState = {

};

const someReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SOME_ACTION':
      initialState['a'] = action.payload
      return initialState
    default:
      return state;
  }
};

export default someReducer;
