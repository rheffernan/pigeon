import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux'

//import { increment, decrement, reset } from './actionCreators'

function counterReducer(state = 0, action) {
  console.log("running counterReducer");
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function ageReducer(state = 0, action) {
  console.log("running nameReducer");
  switch (action.type) {
    case 'INCREMENTAGE':
      return state + 1
    case 'DECREMENTAGE':
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers(
   { counter: counterReducer,
     age: ageReducer
    }
);


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const thestore = createStore(rootReducer);


ReactDOM.render(
   <Provider store={thestore}>
      <App />
   </Provider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


