import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {count: 0};
  clickHandler = () => {
    this.setState({count: this.state.count+1});
  }
  render() {
    return (
      <div className="App">
        <h1>Increment Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.clickHandler}>Increment</button>
      </div>
    );
  }
}

export default App;
