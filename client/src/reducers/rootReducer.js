import { combineReducers } from "redux";
import itemReducer from "../reducers/itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  item: itemReducer,
  category: itemReducer,
  error: errorReducer,
  auth: authReducer
});
