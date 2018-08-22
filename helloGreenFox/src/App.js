import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  }

  render() {
    return (
      <div>
        <Button func={this.increment} name="Buy One" />
        <Display count={this.state.count} />
        <Button func={this.decrement} name="Eat One" />
      </div>
    );
  }
}

export default App;
