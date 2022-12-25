import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  
  decrement(){
    this.setState(state => ({
      counter : state.counter - 1
    }))
  }
  
  increment(){
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }
  
  // Your event handlers 
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button type="button" onClick={this.decrement} id="decrement">
            Decrement
          </button>
          <button type="button" onClick={this.increment} id="increment">
            Increment
          </button>
      </div>
    )
  }
}
