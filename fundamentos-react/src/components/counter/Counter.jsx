import React, { Component } from "react";

class Counter extends Component {
  state = {
    numero: this.props.numeroInicial,
  };


  inc = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };
  dec = () => {
    this.setState({
      numero: this.state.numero - 1,
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>valor inicial: {this.state.numero}</h2>
          <button onClick={this.inc}>Incrementa</button>
          <button onClick={this.dec}>Decrementa</button>
        </div>
      </div>
    );
  }
}

export default Counter;
