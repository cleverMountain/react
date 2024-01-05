import { combineReducers } from "redux";
import countReducer from "./count";
import productListReducer from "./productList";
export default combineReducers({
  countReducer,
  productList: productListReducer
})