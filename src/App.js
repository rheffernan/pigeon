import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect, useSelector, useDispatch } from 'react-redux'

//import { createStore, combineReducers } from 'redux'


//import { increment, decrement, reset } from './actionCreators'

const increment = () => { return { type: "INCREMENT"} };
const incrementAge = () => { return { type: "INCREMENTAGE"} };
const decrement = () => { return { type: "DECREMENT"} };

export const NewComment = () => {
   
   const counterValue = useSelector(state => state.counter);
   const ageValue = useSelector(state => state.age);
   const dispatch = useDispatch();

   console.log("rendering NewComment: " + counterValue);

   return (
      <div>
        <input type="text" value={counterValue + ageValue}  placeholder="Write a comment" />
        <button onClick = { () =>  dispatch({type: "INCREMENT"})} >test</button>
      </div>
    )
}


const mapStateToProps = (state) => {
   return { currval : state.counter };
};

function mapDispatchToProps(dispatch) {
   return {
      //incrementFunc: () => dispatch(increment()), 
      incrementFunc: () => dispatch({type: "INCREMENT"}), 
      incrementAgeFunc: () => dispatch({type: "INCREMENTAGE"}), 
      decrementFunc: () => dispatch(decrement())
   }
}

/*
const mapDispatchToProps = () => {
   return {
      //incrementFunc: () => dispatch(increment()), 
      incrementFunc: increment,
      decrementFunc: decrement
   }
}
*/

class App extends React.Component {


   render()   {
          console.log("re-rendering app with props: " + JSON.stringify(this.props));
	  return (
	    <div className="App">
	      <header className="App-header">
		
		<img src={logo} className="App-logo" alt="logo" />
		<NewComment />
                
		<button  onClick={ (evt) => {console.log(JSON.stringify(this.props))}}  >Increment</button>
		<button  onClick={ (evt) => { this.props.incrementFunc()} }  >Increment</button>
		<button  onClick={ () => this.props.decrementFunc() }  >Decrement</button>
		<button  onClick={ () => this.props.incrementAgeFunc() }  >Increment Age</button>
		<input id="ina" value={this.props.currval} /> 
		<input id="inb" value={this.props.currval} /> 
		<p>
		  Edit <code>src/App.js</code> and save to reload.
		</p>
		<a
		  className="App-link" href="https://reactjs.org"
		  target="_blank"
		  rel="noopener noreferrer"
		>
		  Learn React
		</a>
	      </header>
	    </div>
	  )
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect(mapStateToProps)(App);

