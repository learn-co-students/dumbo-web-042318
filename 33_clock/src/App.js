import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: true,
      message: 'Hallo'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: 'Hola' });
    }, 500);

    setTimeout(() => {
      this.setState({ display: false });
    }, 20000);
  }

  render() {
    // NEVER DO THIS
    // setTimeout(() => {
    //  this.setState({ display: false })
    // }, 20000)

    return (
      <div className="App">
        {this.state.display ? <Clock message={this.state.message} /> : null}
      </div>
    );
  }
}

export default App;
