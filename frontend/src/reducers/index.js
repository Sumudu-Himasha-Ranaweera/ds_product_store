import { combineReducers } from "redux";
import authReducer from "./auth";
import itemReducer from "./item.reducer";

export default combineReducers({
    authReducer,
    itemReducer
})