// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {createStore,applyMiddleware} from 'redux';
// import {Provider} from 'react-redux'
// // import FetchReducer from './components/Redux/Reducer/Reducer.js';
// import thunk from 'redux-thunk';
// import  rootred  from './component/Redux/reducers/main';


// const store = createStore(rootred, applyMiddleware(thunk))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 
//     <Provider store={store} >
//     <App />
//     </Provider>
  
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
// import FetchReducer from './components/Redux/Reducer/Reducer.js';
// import thunk from 'redux-thunk';
// import  rootred  from './component/Redux/reducers/main';


//const store = createStore(rootred, applyMiddleware(thunk))


import {store, persistor} from './component/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <App />
      </PersistGate>
    </Provider>
  
);

