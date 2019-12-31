import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import { createStore } from 'redux'


//import { increment, decrement, reset } from './actionCreators'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })


class NewComment extends React.Component {
  input = null
  
  writeComment = evt => {
    evt.preventDefault();
    const comment = this.input.value;
    comment && this.props.dispatch({ type: 'INCREMENT', comment });
  }
  
  render() {
    const counterValue = this.props.store.getState();
    return (
      <div>
        <input type="text" value={this.counterValue}  placeholder="Write a comment" />
        <button type="button" onClick={this.writeComment}>Submit Comment</button>
      </div>
    )
  }
  
}


function CommentsApp(props) {
  return <NewComment store={store} />
}


function App() {
  return (
    <Provider store={store}>   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CommentsApp />
        <button  onClick={() => {
           store.dispatch({ type: 'INCREMENT' }) }}  >Increment</button>
        <input id="ina" defaultValue={store.getState()} /> 
        connect()(ina)
        connect()(CommentsApp)
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Provider>
  );
}

export default App;
