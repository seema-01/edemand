import { combineReducers } from "redux";
import counterReducer from "./Counter";
import loggedReducer from "./isLogged";
import TransferReducer from "./TransferReducer";

const allReducers = combineReducers({
    counter : counterReducer,
    islogged: loggedReducer,
    cart: TransferReducer,
})

export default allReducers