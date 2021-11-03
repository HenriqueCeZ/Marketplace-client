import { combineReducers } from "redux";
import  userReducer  from './reducers/useReducer';
export default combineReducers({
    user:userReducer
});