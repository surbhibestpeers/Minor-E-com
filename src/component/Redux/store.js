 /*    REDUX THUNK */

import { createStore, applyMiddleware } from "redux";

import rootred from "./reducers/main";
import ReduxThunk from "redux-thunk";

const store = createStore(rootred, applyMiddleware(ReduxThunk));

export default store;


