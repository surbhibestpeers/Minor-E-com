

// // /*    REDUX THUNK */

import { createStore, applyMiddleware} from "redux";
 
  import rootred from "./reducers/main";
   import ReduxThunk from "redux-thunk"

const store = createStore(
         rootred,
         applyMiddleware(ReduxThunk)
         

)

export default store

// import { createStore, applyMiddleware} from "redux";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
//   import rootred from "./reducers/main";
//    import ReduxThunk from "redux-thunk"

//    const persistConfig = { 
//       key: 'root',
//       storage, 
//    }
//    const persistedReducer = persistReducer(persistConfig, rootred ) // create a persisted reducer


// const store = createStore(
//    persistedReducer, 
//    applyMiddleware(ReduxThunk) 
// )
// const  persistor = persistStore(store); 


// export {store,persistor}