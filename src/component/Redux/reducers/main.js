import {combineReducers} from "redux";
import { cartreducer } from "./reducer";
import { AuthReducer } from "./authReducer";

const rootred = combineReducers({
    cartreducer, AuthReducer
});


export default rootred
