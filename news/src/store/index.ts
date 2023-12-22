// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import someReducer from './someReducer';
import {thunk} from 'redux-thunk'
const rootReducer = combineReducers({
  someReducer,
  // Add other reducers here
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
